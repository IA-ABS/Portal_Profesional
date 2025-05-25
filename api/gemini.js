// Importa la biblioteca de Google Generative AI
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Accede a tu API Key desde las variables de entorno de Vercel
const apiKey = process.env.GEMINI_API_KEY;

// Inicializa el cliente de IA Generativa de Google si la API Key está disponible
let genAI;
let model;
if (apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
} else {
  console.error("GEMINI_API_KEY no está configurada. La función de IA no operará.");
}

// Define el manejador de la función serverless
export default async function handler(req, res) {
  // Configuración de cabeceras CORS
  // Permite solicitudes desde cualquier origen. Considera restringirlo a tu dominio en producción.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Maneja las solicitudes OPTIONS (preflight) para CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Solo permite solicitudes POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Verifica si la API Key está configurada
  if (!apiKey || !model) {
    console.error("GEMINI_API_KEY no está configurada o el modelo no pudo ser inicializado.");
    return res.status(500).json({ error: "Configuración del servidor incompleta: la funcionalidad de IA no está disponible." });
  }

  // Extrae el mensaje del cuerpo de la solicitud
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No se proporcionó ningún mensaje.' });
  }

  try {
    // Prompt para Gemini
    const prompt = `Eres un asistente virtual altamente especializado en legislación, tributación y procedimientos administrativos de El Salvador. Tu propósito es ayudar a contadores y abogados proporcionando información precisa, concisa y profesional. Interpreta la siguiente pregunta y responde detalladamente, citando fuentes o artículos legales si es relevante y posible: "${message}"`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.status(200).json({ reply: text });

  } catch (error) {
    console.error('Error al contactar la API de Gemini:', error.message, error.stack);
    // Proporciona un mensaje de error más genérico al cliente por seguridad
    res.status(500).json({ error: 'Hubo un problema al procesar tu solicitud con el asistente IA. Por favor, intenta de nuevo más tarde.' });
  }
}
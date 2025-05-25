import React, { useState, useEffect, useCallback, useRef } from 'react';

function Chatbot({ initialMessageFromHeader, onMessageProcessed, onClose }) {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [responses]);

  const performSend = useCallback(async (messageToSend) => {
    if (!messageToSend || isLoading) return;

    setIsLoading(true);
    setResponses(prev => [...prev, { role: 'user', text: messageToSend }]);

    try {
      // La URL ahora apunta a la serverless function en Vercel
      // El proxy de package.json no se usa en producción para esto.
      // En desarrollo, Vercel CLI puede manejar el proxy a funciones locales si se usa.
      // Para producción, esta ruta será relativa a la raíz del dominio de Vercel.
      const res = await fetch(`/api/gemini`, { // Ruta de la serverless function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Respuesta no JSON del servidor" }));
        console.error("Error del backend (no OK):", res.status, res.statusText, errorData);
        let errorMessage = `Error del servidor: ${res.status}`;
        if (errorData && errorData.error) {
          errorMessage = errorData.error;
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      setResponses(prev => [...prev, { role: 'bot', text: data.reply }]);

    } catch (err) {
      console.error("Error detallado al contactar la API:", err);
      let displayError = 'Error al contactar con el Asistente IA 🤖.';
      if (err.message) {
           displayError += ` (${err.message})`;
      }
      setResponses(prev => [...prev, { role: 'bot', text: displayError, type: 'error' }]);
    } finally {
      setIsLoading(false);
      if (typeof onMessageProcessed === 'function') {
        onMessageProcessed();
      }
    }
  }, [isLoading, onMessageProcessed]);

  useEffect(() => {
    if (initialMessageFromHeader) {
      performSend(initialMessageFromHeader);
    }
  }, [initialMessageFromHeader, performSend]);

  const handleUserInputSend = () => {
    if (!input.trim() || isLoading) return;
    performSend(input);
    setInput('');
  };

  return (
    <div className="chatbot-component-style">
      <div className="chatbot-header">
        <h3>🤖 Asistente IA (Gemini 1.5 Flash)</h3>
        {onClose && <button onClick={onClose} className="close-button">Cerrar</button>}
      </div>
      <div className="messages">
        {responses.map((msg, index) => (
          <div key={index} className={`msg ${msg.role} ${msg.type === 'error' ? 'error' : ''}`}>
            <span>{msg.text}</span>
          </div>
        ))}
        {isLoading && <div className="msg bot"><span>Pensando... 🤔</span></div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Escribe tu consulta para la IA..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              handleUserInputSend();
            }
          }}
          disabled={isLoading}
        />
        <button onClick={handleUserInputSend} disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
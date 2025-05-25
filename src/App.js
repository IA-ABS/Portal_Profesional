import React, { useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import DataDisplay from './components/DataDisplay';
import { mainTopics } from './data/elSalvadorData'; // Importar los temas principales

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [chatInitialMessage, setChatInitialMessage] = useState('');
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const handleTopicSelect = useCallback((topicId) => {
    setSelectedTopicId(topicId);
    setIsChatbotVisible(false); // Ocultar chatbot si se selecciona nuevo tema
  }, []);

  const handleAskGemini = useCallback((context) => {
    setChatInitialMessage(context || 'Hola, necesito asesoría detallada.');
    setIsChatbotVisible(true);
    setSelectedTopicId(null); // Opcional: ocultar DataDisplay al abrir chatbot
  }, []);

  const handleChatbotClose = useCallback(() => {
    setIsChatbotVisible(false);
    setChatInitialMessage('');
  }, []);
  
  const selectedTopicData = selectedTopicId 
    ? mainTopics.find(topic => topic.id === selectedTopicId) 
    : null;

  return (
    <div className="app-container">
      <Header onItemSelect={handleTopicSelect} onAskGemini={() => handleAskGemini('')} />
      <main className="app-main-content">
        {selectedTopicData && !isChatbotVisible && (
          <DataDisplay topicData={selectedTopicData} onAskGemini={handleAskGemini} />
        )}
        {isChatbotVisible && (
          <Chatbot
            initialMessageFromHeader={chatInitialMessage}
            onMessageProcessed={() => setChatInitialMessage('')} // Limpiar mensaje inicial después de procesar
            onClose={handleChatbotClose} // Añadir prop para cerrar
          />
        )}
        {!selectedTopicData && !isChatbotVisible && (
          <div className="welcome-message">
            <h2>Bienvenido al Portal Profesional SV</h2>
            <p>Seleccione una categoría del menú superior para ver información o inicie una consulta con nuestro asistente IA.</p>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>© 2024 Portal Profesional SV - Desarrollado con Asistencia IA</p>
      </footer>
    </div>
  );
}

export default App;
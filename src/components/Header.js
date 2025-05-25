import React from 'react';
import { mainTopics } from '../data/elSalvadorData';

function Header({ onItemSelect, onAskGemini }) {
  return (
    <header className="app-header-style">
      <h1>🏛️ Portal Profesional SV 🇸🇻</h1>
      <p>Tu centro de consulta legal, tributaria y administrativa de El Salvador.</p>
      <p>Selecciona una categoría para ver información o haz una consulta directa a la IA.</p>
      <nav>
        <ul>
          {mainTopics.map((topic) => (
            <li
              key={topic.id}
              onClick={() => onItemSelect(topic.id)}
              title={`Consultar sobre: ${topic.name}`}
            >
              {topic.icon} {topic.name}
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={onAskGemini} className="ask-gemini-button">
        💬 Consultar a Asistente IA (Gemini)
      </button>
    </header>
  );
}

export default Header;
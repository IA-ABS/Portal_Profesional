import React from 'react';

function DataDisplay({ topicData, onAskGemini }) {
  if (!topicData) {
    return <p>Selecciona un tema para ver la información.</p>;
  }

  return (
    <div className="data-display-container">
      <h2>
        {topicData.icon && <span className="topic-icon">{topicData.icon}</span>}
        {topicData.name}
      </h2>
      {topicData.description && <p className="topic-description">{topicData.description}</p>}

      {topicData.sections && topicData.sections.map((section, index) => (
        <div key={index} className="section">
          <h3>{section.title}</h3>
          {section.type === 'links' && section.items && (
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <strong>{item.name}:</strong>{' '}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.urlText || 'Visitar Enlace'}
                    </a>
                  ) : (
                    item.text
                  )}
                  {item.details && <p style={{ fontSize: '0.9em', color: 'var(--text-blue)', marginTop: '5px' }}>{item.details}</p>}
                </li>
              ))}
            </ul>
          )}
          {section.type === 'contact' && section.items && (
            <div className="contact-info">
              {section.items.map((item, idx) => (
                <p key={idx}>
                  <strong>{item.method}:</strong>{' '}
                  {item.isLink ? (
                     <a href={item.value} target="_blank" rel="noopener noreferrer">{item.displayValue || item.value}</a>
                  ) : (
                    item.value
                  )}
                </p>
              ))}
            </div>
          )}
          {section.type === 'text' && section.content && (
            <div className="details">
              <p>{section.content}</p>
            </div>
          )}
           {section.type === 'subtopics' && section.items && (
            <ul>
              {section.items.map((subtopic, idx) => (
                <li key={idx}>
                  <strong>{subtopic.name}</strong>
                  {subtopic.description && <p style={{ fontSize: '0.9em', color: 'var(--text-blue)', marginTop: '5px' }}>{subtopic.description}</p>}
                  {subtopic.details && subtopic.details.map((detail, dIdx)=>(
                     <p key={dIdx} style={{ fontSize: '0.9em', color: 'var(--text-apple-green)', marginLeft: '15px' }}>- {detail}</p>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      
      <button 
        onClick={() => onAskGemini(`Necesito más detalles sobre ${topicData.name}. Específicamente, sobre...`)}
        className="ask-gemini-context-button"
      >
        💬 Ampliar sobre {topicData.name} con IA
      </button>
    </div>
  );
}

export default DataDisplay;
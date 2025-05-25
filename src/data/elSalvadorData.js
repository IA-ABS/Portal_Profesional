// Este archivo contendrá la información estructurada.
// Es un punto de partida, deberás completarlo exhaustivamente.

export const mainTopics = [
  {
    id: 'mh',
    name: 'Ministerio de Hacienda',
    icon: '💰',
    description: 'Información tributaria, aduanera y fiscal de El Salvador.',
    sections: [
      {
        title: 'Leyes Principales',
        type: 'links',
        items: [
          { name: 'Código Tributario', url: 'https://www.transparencia.gob.sv/institutions/mh/documents/218523/download', urlText: 'Descargar Código Tributario (referencia)', details: 'Normativa fundamental que rige los impuestos y obligaciones fiscales.' },
          { name: 'Ley de Impuesto sobre la Renta', url: 'https://www.transparencia.gob.sv/institutions/mh/documents/218516/download', urlText: 'Descargar Ley ISR (referencia)', details: 'Regula el impuesto a las ganancias obtenidas.' },
          { name: 'Ley de Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios (IVA)', url: 'https://www.transparencia.gob.sv/institutions/mh/documents/218518/download', urlText: 'Descargar Ley IVA (referencia)', details: 'Grava la venta de bienes y servicios.' },
          { name: 'Ley de Registro y Control Especial de Contribuyentes al Fisco', url: 'https://www.asamblea.gob.sv/node/10239', urlText: 'Ver Ley (Asamblea)', details: 'Establece el Número de Identificación Tributaria (NIT).' },
        ],
      },
      {
        title: 'Reglamentos Importantes',
        type: 'links',
        items: [
          { name: 'Reglamento del Código Tributario', url: 'https://www.transparencia.gob.sv/institutions/mh/documents/218511/download', urlText: 'Descargar Reglamento (referencia)', details: 'Detalla la aplicación del Código Tributario.' },
        ],
      },
      {
        title: 'Portales y Servicios',
        type: 'links',
        items: [
          { name: 'Declaración en Línea (DET)', url: 'https://portaldet.mh.gob.sv/', urlText: 'Acceder a DET' },
          { name: 'Sitio Web Oficial MH', url: 'https://www.mh.gob.sv/', urlText: 'Visitar MH' },
        ],
      },
      {
        title: 'Contacto y Asistencia',
        type: 'contact',
        items: [
          { method: 'Teléfono (Asistencia Contribuyente)', value: '(503) 2244-3444' },
          { method: 'Correo (Consultas Generales)', value: 'asistencia@mh.gob.sv', isLink: true, displayValue: 'asistencia@mh.gob.sv' },
        ],
      },
    ],
  },
  {
    id: 'mintrab',
    name: 'Ministerio de Trabajo',
    icon: '🛠️',
    description: 'Legislación laboral, contratos, seguridad ocupacional y relaciones laborales.',
    sections: [
      {
        title: 'Leyes y Códigos',
        type: 'links',
        items: [
          { name: 'Código de Trabajo', url: 'https://www.asamblea.gob.sv/node/6650', urlText: 'Ver Código (Asamblea)', details: 'Marco legal principal para las relaciones laborales.' },
          { name: 'Ley General de Prevención de Riesgos en los Lugares de Trabajo', url: 'https://www.asamblea.gob.sv/node/7059', urlText: 'Ver Ley (Asamblea)', details: 'Normativa sobre seguridad y salud ocupacional.' },
        ],
      },
      {
        title: 'Portales y Servicios',
        type: 'links',
        items: [
          { name: 'Sitio Web Oficial MTRAB', url: 'https://www.mtps.gob.sv/', urlText: 'Visitar MTRAB' },
          { name: 'Calculadora de Prestaciones (Referencial)', url: 'https://www.mtps.gob.sv/servicios/calculo-de-prestaciones/', urlText: 'Usar Calculadora' },
        ],
      },
      {
        title: 'Contacto',
        type: 'contact',
        items: [
          { method: 'Teléfono (Información)', value: '(503) 2529-3700' },
        ],
      },
    ],
  },
  // ... (resto de los datos de elSalvadorData.js, igual que antes)
  // Por brevedad, no lo repetiré todo aquí, pero debe estar completo.
  {
    id: 'cnr',
    name: 'Registro de Comercio (CNR)',
    icon: '🧾',
    description: 'Inscripción de sociedades, comerciantes individuales, balances y marcas.',
    sections: [
      {
        title: 'Leyes Relevantes',
        type: 'links',
        items: [
          { name: 'Código de Comercio', url: 'https://www.asamblea.gob.sv/node/6651', urlText: 'Ver Código (Asamblea)', details: 'Regula la actividad comercial y las sociedades mercantiles.' },
          { name: 'Ley de Procedimientos Mercantiles', url: 'https://www.asamblea.gob.sv/decretos/1489343305530/document', urlText: 'Descargar Ley (referencia)', details: 'Establece los procesos para actos mercantiles.' },
           { name: 'Ley de Marcas y Otros Signos Distintivos', url: 'https://www.asamblea.gob.sv/node/6904', urlText: 'Ver Ley (Asamblea)'},
        ],
      },
      {
        title: 'Trámites y Servicios en Línea',
        type: 'links',
        items: [
          { name: 'Sitio Web Oficial CNR', url: 'https://www.cnr.gob.sv/', urlText: 'Visitar CNR' },
          { name: 'CNR en Línea (Servicios)', url: 'https://cnrenlinea.cnr.gob.sv/', urlText: 'Acceder a CNR en Línea' },
        ],
      },
       {
        title: 'Contacto Registro de Comercio',
        type: 'contact',
        items: [
          { method: 'Teléfono (Consultas)', value: '(503) 2593-5000' },
          { method: 'Correo (Soporte CNR en Línea)', value: 'soporte.cnrenlinea@cnr.gob.sv', isLink: true },
        ],
      },
    ],
  },
  {
    id: 'isss',
    name: 'ISSS',
    icon: '🏥',
    description: 'Instituto Salvadoreño del Seguro Social: salud y prestaciones económicas.',
    sections: [
      {
        title: 'Leyes y Reglamentos',
        type: 'links',
        items: [
          { name: 'Ley del Seguro Social', url: 'https://www.isss.gob.sv/transparencia/marco-legal/', urlText: 'Ver Marco Legal ISSS', details: 'Ley fundamental del ISSS.' },
          { name: 'Reglamento de Afiliación, Inspección y Estadística', url: 'https://www.isss.gob.sv/transparencia/marco-legal/', urlText: 'Ver en Marco Legal ISSS' },
        ],
      },
      {
        title: 'Portales y Servicios',
        type: 'links',
        items: [
          { name: 'Sitio Web Oficial ISSS', url: 'https://www.isss.gob.sv/', urlText: 'Visitar ISSS' },
          { name: 'ISSS en Línea (Empleadores)', url: 'https://enlinea.isss.gob.sv/', urlText: 'Acceder ISSS en Línea' },
        ],
      },
      {
        title: 'Contacto',
        type: 'contact',
        items: [
          { method: 'Teléfono (Call Center)', value: '127' },
          { method: 'WhatsApp (Consultas COVID-19 y otros)', value: '(503) 7070-5747', isLink: true, displayValue:'(503) 7070-5747 (WhatsApp)'},
        ],
      },
    ],
  },
  {
    id: 'afp',
    name: 'Fondo de Pensiones (AFP)',
    icon: '👴👵',
    description: 'Administradoras de Fondos de Pensiones y Superintendencia de Pensiones.',
    sections: [
      {
        title: 'Leyes y Normativa',
        type: 'links',
        items: [
          { name: 'Ley del Sistema de Ahorro para Pensiones', url: 'https://www.asamblea.gob.sv/node/7026', urlText: 'Ver Ley SAP (Asamblea)', details: 'Regula el sistema de pensiones privado.' },
          { name: 'Sitio Web Superintendencia de Pensiones (SP)', url: 'https://www.sp.gob.sv/', urlText: 'Visitar SP', details: 'Ente regulador de las AFP.'},
        ],
      },
      {
        title: 'AFPs Principales',
        type: 'links',
        items: [
          { name: 'AFP Confía', url: 'https://www.confia.com.sv/', urlText: 'Visitar AFP Confía' },
          { name: 'AFP Crecer', url: 'https://www.crecer.com.sv/', urlText: 'Visitar AFP Crecer' },
        ],
      },
      {
        title: 'Contacto Superintendencia de Pensiones',
        type: 'contact',
        items: [
          { method: 'Teléfono SP', value: '(503) 2264-9700' },
          { method: 'Correo SP', value: 'atencion@sp.gob.sv', isLink: true },
        ],
      },
    ],
  },
  {
    id: 'alcaldias',
    name: 'Alcaldías Principales',
    icon: '🏛️',
    description: 'Tributos municipales, ordenanzas y trámites en las principales alcaldías.',
    sections: [
      {
        title: 'Alcaldía de San Salvador',
        type: 'subtopics', // Usar 'subtopics' para estructurar mejor
        items: [
          { 
            name: 'Información General', 
            description: 'Impuestos, tasas por servicios, licencias.',
            details: [
                'Impuesto sobre Actividades Económicas.',
                'Tasas por recolección de desechos sólidos, alumbrado público.',
                'Permisos de construcción, licencias de funcionamiento.'
            ]
          },
          { 
            name: 'Enlaces y Contacto',
            details: [
                'Sitio Web: https://sansalvador.gob.sv/ (Verificar URL oficial actual)',
                'Teléfono: (503) 2511-6000 (Verificar número actual)'
            ]
          }
        ]
      },
      {
        title: 'Alcaldía de Santa Tecla',
         type: 'subtopics',
        items: [
          { 
            name: 'Información General', 
            description: 'Impuestos y tasas municipales específicas.',
            details: [
                'Similar a San Salvador, pero con sus propias ordenanzas y tasas.',
                'Consultar ordenanza de impuestos y tasas vigente.'
            ]
          },
          { 
            name: 'Enlaces y Contacto',
            details: [
                'Sitio Web: https://santatecladigital.gob.sv/ (Verificar URL oficial actual)',
                'Teléfono: (503) 2500-1300 (Verificar número actual)'
            ]
          }
        ]
      },
    ],
  },
  {
    id: 'cvpcp',
    name: 'Consejo de Vigilancia (Contadores)',
    icon: '👨‍⚖️',
    description: 'Consejo de Vigilancia de la Profesión de Contaduría Pública y Auditoría.',
    sections: [
      {
        title: 'Información y Normativa',
        type: 'links',
        items: [
          { name: 'Sitio Web Oficial CVPCPA', url: 'https://www.cvpcpa.gob.sv/', urlText: 'Visitar CVPCPA', details: 'Información sobre registro, ética y normativa para contadores.' },
          { name: 'Ley Reguladora del Ejercicio de la Contaduría', url: 'https://www.cvpcpa.gob.sv/index.php/leyes-y-reglamentos/ley-reguladora-del-ejercicio-de-la-contaduria', urlText: 'Ver Ley (CVPCPA)' },
        ],
      },
      {
        title: 'Contacto',
        type: 'contact',
        items: [
          { method: 'Teléfono', value: '(503) 2260-5206' },
          { method: 'Correo', value: 'info@cvpcpa.gob.sv', isLink: true },
        ],
      },
    ],
  },
  {
    id: 'cnj', 
    name: 'Consejo de Vigilancia (Abogados/Notarios)',
    icon: '🧑‍⚖️',
    description: 'Información relevante para Abogados y Notarios (CSJ / CNJ).',
    sections: [
      {
        title: 'Corte Suprema de Justicia (CSJ) - Notariado',
        type: 'links',
        items: [
          { name: 'Sitio Web CSJ (Sección Notariado)', url: 'https://www.csj.gob.sv/index.php/servicios/servicios-notariales', urlText: 'Visitar CSJ Notariado', details: 'Información sobre ejercicio notarial, exámenes, etc.' },
          { name: 'Ley de Notariado', url: 'https://www.asamblea.gob.sv/node/7142', urlText: 'Ver Ley (Asamblea)' },
        ],
      },
       {
        title: 'Consejo Nacional de la Judicatura (CNJ)',
        type: 'links',
        items: [
          { name: 'Sitio Web CNJ', url: 'https://www.cnj.gob.sv/', urlText: 'Visitar CNJ', details: 'Información sobre la carrera judicial y formación.' },
        ],
      },
      {
        title: 'Contacto CSJ (Sección de Investigación Profesional - Notariado)',
        type: 'contact',
        items: [
          { method: 'Teléfono CSJ Notariado', value: '(503) 2271-8888 Ext. 3352 o 3353' },
        ],
      },
    ],
  },
];
# Portal Profesional SV (Vercel Edition) 🇸🇻

Aplicación React para consulta de información legal, tributaria y administrativa de El Salvador, con asistencia de IA (Gemini 1.5 Flash). Desplegada en Vercel y usando Vercel Serverless Functions para la API de Gemini.

## Características

*   Acceso rápido a información de Ministerios (Hacienda, Trabajo), Registro de Comercio, ISSS, AFP.
*   Datos sobre Alcaldías principales y sus tributos.
*   Información de Consejos de Vigilancia (Contadores, Abogados/Notarios).
*   Chatbot integrado con Gemini 1.5 Flash mediante una Serverless Function en Vercel.
*   Diseño minimalista con tema azul oscuro, bordes verde menta y naranja suavizados.

## Estructura del Proyecto


## Requisitos Previos

*   Node.js (v18+ recomendado)
*   npm o yarn
*   Una API Key de Google Gemini (obtenla en [Google AI Studio](https://aistudio.google.com/app/apikey))
*   [Vercel CLI](https://vercel.com/docs/cli) (opcional, pero recomendado para desarrollo local): `npm i -g vercel`

## Configuración y Despliegue

1.  **Clonar el repositorio (o crear los archivos generados por `structure.py`):**
    Si usaste `structure.py`, ya tendrás la estructura.

2.  **Instalar dependencias:**
    Navega a la raíz del proyecto y ejecuta:
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Desarrollo Local (con Vercel CLI):**
    *   Asegúrate de tener Vercel CLI instalado.
    *   Crea un archivo `.env.development.local` en la raíz del proyecto con tu API key:
        ```
        GEMINI_API_KEY=TU_API_KEY_DE_GEMINI_AQUI
        ```
        (Este archivo está en `.gitignore` y no se subirá a GitHub).
    *   Ejecuta el comando de desarrollo de Vercel:
        ```bash
        vercel dev
        ```
        Esto iniciará un servidor local (usualmente en `http://localhost:3000`) que simula el entorno de Vercel, incluyendo las serverless functions en `/api`.

4.  **Despliegue en Vercel:**
    *   Sube tu proyecto a un repositorio de GitHub, GitLab o Bitbucket.
    *   Ve a [Vercel](https://vercel.com) e importa tu proyecto desde el repositorio.
    *   **Configuración del Proyecto en Vercel:**
        *   Vercel debería detectar automáticamente la configuración de Create React App y las Serverless Functions.
        *   **Variables de Entorno:** Ve a la configuración de tu proyecto en Vercel (Settings > Environment Variables) y añade una variable llamada `GEMINI_API_KEY` con el valor de tu API Key de Google Gemini.
    *   Vercel construirá y desplegará tu aplicación. Cada `git push` a la rama conectada (usualmente `main`) disparará un nuevo despliegue.

## Uso

*   Navega por las categorías en el encabezado para ver información específica.
*   Haz clic en "Ampliar sobre [Tema] con IA" para enviar una consulta contextualizada a Gemini.
*   Usa el botón "Consultar a Asistente IA (Gemini)" para consultas generales.

## Contribuir a los Datos

La información clave se encuentra en `src/data/elSalvadorData.js`. Si deseas añadir o actualizar enlaces, leyes, contactos, etc., edita este archivo.

## Personalización

*   **Estilos:** Modifica `src/App.css`.
*   **Contenido de Datos:** Edita `src/data/elSalvadorData.js`.
*   **Prompt de Gemini:** Ajusta el prompt en `api/gemini.js`.
*   **Configuración de Vercel:** Modifica `vercel.json` para ajustes avanzados de build o enrutamiento.
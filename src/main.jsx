import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import { registerWebMcpTools } from './webmcp.js'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'
import './index.css'

registerWebMcpTools()

const rootEl = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
)

if (rootEl.hasChildNodes()) {
  // Prerendered production build: hydrate the existing server-rendered markup.
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  // Dev server: no prerendered markup yet, mount fresh.
  ReactDOM.createRoot(rootEl).render(app)
}

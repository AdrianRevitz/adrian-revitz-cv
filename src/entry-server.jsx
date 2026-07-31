import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>
  )
}

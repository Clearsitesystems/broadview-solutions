import { createRoot } from 'react-dom/client'
import './i18n'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// Single render - no StrictMode to avoid double renders
const root = createRoot(rootElement)
root.render(<App />)

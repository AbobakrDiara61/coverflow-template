import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import IntersectionProvider from './contexts/IntersectionProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IntersectionProvider>
      <App />
    </IntersectionProvider>
  </StrictMode>
)

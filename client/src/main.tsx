import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Set a CSS variable `--vh` to represent 1% of the viewport height.
// This helps avoid the mobile 100vh address-bar white-gap issue.
function setVhVariable() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

setVhVariable()
window.addEventListener('resize', setVhVariable)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

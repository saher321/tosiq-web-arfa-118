import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <About />
  </StrictMode>,
)

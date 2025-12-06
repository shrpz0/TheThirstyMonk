import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './utils/i18n.js'
import App from './App.jsx'

function setVh() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setVh();
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);

if (window.visualViewport) {
  const updateVV = () => {
    document.documentElement.style.setProperty('--vvh', `${visualViewport.height}px`);
  };
  updateVV();
  visualViewport.addEventListener('resize', updateVV);
  visualViewport.addEventListener('scroll', updateVV);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

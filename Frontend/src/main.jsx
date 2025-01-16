import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Usercontext } from './Context/Usercontext.jsx'
import { BrowserRouter } from 'react-router-dom'
import Drivercontex from './Context/Drivercontex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Drivercontex>
    <Usercontext>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </Usercontext>
    </Drivercontex>
    
  </StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage'
import Usersignup from './Pages/Usersignup';
import Userlogin from './Pages/Userlogin';
import { Driverlogin } from './Pages/Driverlogin';
import Driversignup from './Pages/Driversignup';

function App() {


  return (
  
      <div>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Userlogin />} />
          <Route path='/signup' element={<Usersignup />} />
          <Route path='/driver-login' element={<Driverlogin />} />
          <Route path='/driver-signup' element={<Driversignup />} />
        </Routes>
      </div>
  
  )
}

export default App

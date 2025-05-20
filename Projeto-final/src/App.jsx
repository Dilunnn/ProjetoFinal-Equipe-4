import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import './App.css'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <div className='container'>
        <BrowserRouter>
            <Navbar/>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';

function App() {


  return (
    <>
    <div className='container'>
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
            <Footer/>
        </BrowserRouter>
    </div>
    </>
  )
}

export default App

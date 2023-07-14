import React from 'react'
import Home from './components/Home'
import Navigationbar from './components/Navigationbar'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import RegisterPage from './components/RegisterPage/RegisterPage'
import RegistrationDetailsPage from './components/RegistrationDetailsPage'
import RegistrationData from './components/RegistrationData'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter >
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Navigate to="/" />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/registration-data' element={<RegistrationData />} />
        <Route path='/registration-details/:id' element={<RegistrationDetailsPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import BasketPage from './pages/BasketPage'


function App() {


  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sepet' element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

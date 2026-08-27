import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Menu from './Components/Menu'
import Users from './Pages/Users'
import Cardapio from './Pages/Cardapio'
import Faq from './Pages/Faq'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter> 
        <Menu />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    </BrowserRouter>
  )
}

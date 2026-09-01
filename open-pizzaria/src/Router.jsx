import React from 'react'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Menu from './Components/Menu'
import Users from './Pages/Users'
import Cardapio from './Pages/Cardapio'
import Faq from './Pages/Faq'
import Cadastro from './Pages/Cadastro/Index'
import NotFound from './Pages/NotFound/Index'



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
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

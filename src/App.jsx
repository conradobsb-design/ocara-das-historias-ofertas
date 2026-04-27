import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Oferta1 from './pages/Oferta1'
import Oferta2 from './pages/Oferta2'
import Oferta3 from './pages/Oferta3'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presenca-profissional-30" element={<Oferta1 />} />
        <Route path="/lancamento-minimo" element={<Oferta2 />} />
        <Route path="/diagnostico" element={<Oferta3 />} />
      </Routes>
    </BrowserRouter>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'
import PaginaPerfilPrestador from './assets/Components/PaginaPerfilPrestador/PaginaPerfilPrestador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router /> */}
    <PaginaPerfilPrestador/>
  </StrictMode>,
)

import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Lampada from './components/Lampada'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Lampada/>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
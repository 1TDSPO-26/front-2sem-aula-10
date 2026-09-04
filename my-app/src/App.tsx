import React from 'react'
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import Lampada from './components/Lampada'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div>
      <Cabecalho />
      {/* <Lampada /> */}
      <Outlet/>
      <Rodape />
    </div>
  )
}

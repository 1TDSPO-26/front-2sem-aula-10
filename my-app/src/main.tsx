import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

//Objeto de rotas
import { createBrowserRouter, RouterProvider } from 'react-router'
//Componente de Rotas
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Error from './routes/Error'
import Lampada from './components/Lampada/index.tsx'

const router = createBrowserRouter ([
  {
    path: '/', element: <App />, errorElement: <Error />, children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> },
      { path: '/lampada', element: <Lampada /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

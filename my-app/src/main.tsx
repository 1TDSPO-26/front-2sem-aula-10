import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Objetos de Rotas
import { createBrowserRouter, RouterProvider } from 'react-router'

// Componentes de Rotas
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
import Lampada from './components/Lampada/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> },
      { path: '/lampada', element: <Lampada/>}
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
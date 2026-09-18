import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/home.jsx'
import UnderConstruction from './pages/underConstruction.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "about", element:<UnderConstruction />
      },
      {
        path: "services", element:<UnderConstruction />
      },
      {
        path: "contact", element:<UnderConstruction />
      },
      {
        path: "*", element: <UnderConstruction />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

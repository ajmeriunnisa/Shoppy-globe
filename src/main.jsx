import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body.jsx'
import ProductList from './components/ProductList.jsx'
import Checkout from './components/Checkout.jsx'
import Cart from './components/Cart.jsx'

// ===== Application Routing Setup =====
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
       path:"/",
       element:<Body/>
      },
      {
        path:"/products",
        element:<ProductList/>
      },
      {
      path:"/checkout",
      element:<Checkout/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])


// ===== Rendering the App to the DOM =====
createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)

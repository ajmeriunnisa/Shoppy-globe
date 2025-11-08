import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// ===== Lazy Loading Components for Code Splitting =====
const App = lazy(() => import("./App.jsx"));
const Body = lazy(() => import("./components/Body.jsx"));
const ProductList = lazy(() => import("./components/ProductList.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const ErrorPage = lazy(() => import("./components/ErrorPage.jsx"));

// ===== Application Routing Setup with Lazy Loaded Components =====
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center py-20 text-lg font-semibold text-gray-600">Loading App...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div className="text-center py-20 text-lg font-semibold text-gray-600">Loading Error Page...</div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div className="text-center py-10">Loading Home...</div>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<div className="text-center py-10">Loading Products...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<div className="text-center py-10">Loading Checkout...</div>}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div className="text-center py-10">Loading Cart...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div className="text-center py-10">Loading Product Details...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      }
    ]
  }
])


// ===== Rendering the App to the DOM =====
createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div className="text-center py-20 text-lg font-semibold text-gray-600">Initializing Application...</div>}>
    <RouterProvider router={appRouter} />
  </Suspense>
)

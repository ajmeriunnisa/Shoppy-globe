import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {
  return (
    <Provider store={store}>
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='grow px-10 py-6'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
    </Provider>
  )
}

export default App
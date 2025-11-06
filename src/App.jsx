import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='grow px-10 py-6'>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
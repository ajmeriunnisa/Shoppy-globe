import React from 'react'

function Header() {
  return (
    <header>
         <nav className='flex justify-between items-center bg-white px-10 py-6 shadow-sm'>
        <h1 className='p-2 font-extrabold text-3xl text-blue-900 cursor-pointer tracking-tighter'>ShoppyGlobe</h1>
       
            <ul className='flex items-center space-x-8 text-[25px] text-blue-800 font-bold cursor-pointer'>
                <li className='hover:text-blue-500'>Home</li>
                <li className='hover:text-blue-500'>Products</li>
                <li className='hover:text-blue-500'>Checkout</li>
                <li className='hover:text-blue-500'>Cart</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
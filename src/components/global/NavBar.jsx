import React from 'react'

function NavBar() {
  return (
    <div className='NavBar'>
    <h1 className='Logo'>Youxo</h1>
    <ul>
    <li className='active'><a href="/"> Home</a></li>
    <li><a href="/about">About </a></li>
    <li><a href="/contact">Contact </a></li>
    </ul>
    </div>
  )
}

export default NavBar
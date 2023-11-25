import React from 'react'
import logo from "../Imgaes/logo.svg"
import { FaSearch, FaBook, FaGem, FaRegBell, FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='left-nav'>
              <img width={50} src={logo} alt='logo' />
              <h1 id='heading'>KeazoNBOOKS</h1>
          </div>
          <div className='center-nav'>
              <div className='search-div'>
                  <FaSearch />
                  <input id='search'
                      placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
                      type='text' name='search' />
              </div>
              <button id='search-btn'>Search</button>
          </div>
          <div className='right-nav'>
              <FaBook className='icons' />
              <FaRegBell className='icons' />
              <FaGem className='icons' />
              <FaRegUserCircle className='icons'/>
          </div>
      </div>
  )
}

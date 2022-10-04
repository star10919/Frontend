import React, { useState } from 'react'
import Menu from './component/Menu'
import Logo from './component/Logo'
import LoginContainer from './component/LoginContainer'
import Favorite from './component/Favorite'
import Search from './component/Search'
import './index.css'


function App() {
  return (
    <div className='App'>
      <div className='mainMenu'>
        <Menu />
        <Logo />
      </div>
      <div className='subMenun'>
        <LoginContainer />
        <Favorite />
        <Search />
      </div>

    </div>
  )
}

export default App

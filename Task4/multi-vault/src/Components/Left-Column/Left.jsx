import React from 'react'
import './Left.css'
import Menu from '../Left-Side Menu/Menu'
import Stared from '../Stared-Accounts/Stared'
const Left = () => {
  return (
    <div class = "left-column">
        <Menu/>
        <Stared/>
    </div>
  )
}

export default Left
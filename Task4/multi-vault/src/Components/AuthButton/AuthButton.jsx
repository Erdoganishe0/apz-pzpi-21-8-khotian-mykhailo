import React from 'react'
import './AuthButton.css'
const AuthButton = (props) => {
  return (
    <div className='auth-button-container'>
        {props.name}
    </div>
  )
}

export default AuthButton
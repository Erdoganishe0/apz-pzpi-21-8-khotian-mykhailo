import React from 'react'
import './Auth.css'
import LoginElement from '../LoginElement/LoginElement'
import AuthButton from '../AuthButton/AuthButton'

const Auth = () => {
  return (
    <div className='auth-container'>
        <div className='auth-header'>
            Sign in
        </div>
        <div className='auth-redirect'>
            Have no account?
            <a> Register </a>
        </div>
        <div className='login-elements'>
            <LoginElement name = "Username" src = "./Static/person.png"/>
            <LoginElement name = "Password" src = "./Static/password.png"/>
        </div>
        <div className='auth-button'>
            <AuthButton name = "Sign in"/>
        </div>
    </div>
  )
}

export default Auth
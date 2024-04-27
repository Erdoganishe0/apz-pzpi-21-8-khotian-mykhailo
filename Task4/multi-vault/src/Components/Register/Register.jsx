import React from 'react'
import './Register.css'
import LoginElement from '../LoginElement/LoginElement'
import AuthButton from '../AuthButton/AuthButton'

const Register = () => {
  return (
    <div className='register-container'>
    <div className='register-header'>
        Sign in
    </div>
    <div className='register-redirect'>
        Already have an account?
        <a> Sing in </a>
    </div>
    <div className='login-elements'>
        <LoginElement name = "Username" src = "./Static/person.png"/>
        <LoginElement name = "Password" src = "./Static/password.png"/>
        <LoginElement name = "Confirm password" src = "./Static/password.png"/>
    </div>
    <div className='register-button'>
        <AuthButton name = "Sign up"/>
    </div>
</div>
  )
}

export default Register
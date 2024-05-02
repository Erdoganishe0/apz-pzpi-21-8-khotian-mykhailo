import React from 'react'
import './Auth.css'
import axios from 'axios'
import LoginElement from '../LoginElement/LoginElement'
import AuthButton from '../AuthButton/AuthButton'

const Auth = () => {
    function get_current_values(){
        const email = document.getElementsByClassName("login-element-input")[0].value
        const password = document.getElementsByClassName("login-element-input")[1].value
        return {email: email, pwd: password}
    }

    const fetchData = async (data) => {
        try {
            const response = await axios.post('auth/login', data, {
                headers: {
                'Content-Type': 'application/json'
            }})
            console.log(response.message)
        } catch (error) {
            
            alert('Username or password are incorrecr')
        }

    }

    function buttonOnClick(){

        const dataObject = get_current_values()
        console.log(dataObject)
        fetchData(dataObject)      
   
    }

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
            <AuthButton name = "Sign in" function = {buttonOnClick} />
        </div>
    </div>
  )
}

export default Auth
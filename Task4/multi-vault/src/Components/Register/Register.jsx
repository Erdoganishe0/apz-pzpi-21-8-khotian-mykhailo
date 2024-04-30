import React from 'react'
import axios from 'axios'
import './Register.css'
import LoginElement from '../LoginElement/LoginElement'
import AuthButton from '../AuthButton/AuthButton'

const Register = () => {

    function checkPassword(){
        return document.getElementsByClassName("login-element-input")[2].value == document.getElementsByClassName("login-element-input")[3].value
    }

    function get_current_values(){
        const email = document.getElementsByClassName("login-element-input")[0].value
        const username = document.getElementsByClassName("login-element-input")[1].value
        const password = document.getElementsByClassName("login-element-input")[2].value
        return {email: email, user: username, pwd: password}
    }

    const fetchData = async (data) => {
        try {
        console.log(data)
        const response = await axios.post('auth/register', data, {
            headers: {
              'Content-Type': 'application/json'
            }})
        console.log(response)
        } catch (error) {
        console.error('Error fetching data:', error)
        }
    };
    

    function buttonOnClick(){

        if (!checkPassword()){
            alert("HUI")
            return 
        }
        const dataObject = get_current_values()
        console.log(dataObject)
        fetchData(dataObject)      

        
    }

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
        <LoginElement name = "Email" src = "./Static/email.png"/>
        <LoginElement name = "Username" src = "./Static/person.png"/>
        <LoginElement name = "Password" src = "./Static/password.png"/>
        <LoginElement name = "Confirm password" src = "./Static/password.png"/>
    </div>
    <div className='register-button'>
        <AuthButton name = "Sign up" function = {buttonOnClick}/>
    </div>
</div>
  )
}

export default Register


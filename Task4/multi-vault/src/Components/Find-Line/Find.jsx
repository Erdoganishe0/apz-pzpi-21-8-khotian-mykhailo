import React from 'react'
import './Find.css'

const Find = (props) => {

  const isEnglish = true
  return (
    <div className='find-line'>
        <input className='find-line-input' placeholder = {props.placeholder}></input>
    </div>

  )
}

export default Find
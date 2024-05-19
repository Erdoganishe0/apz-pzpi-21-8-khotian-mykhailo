import React from 'react'
import './Find.css'

const Find = (props) => {

  const isEnglish = true
  return (
    <div className='find-line'>
        <input className='find-line-input' placeholder = {isEnglish ? 'Find...' : 'Знайти...'}></input>
    </div>

  )
}

export default Find
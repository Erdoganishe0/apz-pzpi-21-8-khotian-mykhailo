import React from 'react'
import './Element.css'

const Element = (props) => {
  return (
        <div className = {props.isActive ? "element-container active" : "element-container"}> 
            <img class = "element-icon" src={props.isActive ? "Static/active/" + props.iconSrc : "Static/inactive/" + props.iconSrc}></img>
            <h3 class = "element-name">{props.name}</h3>
        </div>
  )
}

export default Element
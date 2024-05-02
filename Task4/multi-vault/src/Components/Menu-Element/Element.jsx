import React from 'react'
import './Element.css'
import Send from '../Send/Send'
import Recieve from '../Recieve/Recieve'

const Element = (props) => {
  return (
        <div className = "element-container"> 
            <img class = "element-icon" src={props.isActive ? "Static/active/" + props.iconSrc : "Static/inactive/" + props.iconSrc}></img>
            <a href = {props.isLink ? "/" + props.name : ""}  class = "element-name">{props.name}</a>  
            {props.name == "Send" ? <Send isActive = {!props.isHidden}/> : ""}
            {props.name == "Recieve" ? <Recieve isActive = {!props.isHidden} adress = "0x1233542376527547234"/> : ""}
        </div>
  )
}

export default Element
import React, { useState } from 'react';
import './Element.css'
import Send from '../Send/Send'
import Recieve from '../Recieve/Recieve'

const Element = (props) => {

  const [isHidden, setIsHidden] = useState(props.isHidden);

  const buttonClick = () => {

    setIsHidden(!isHidden);

  };

  return (
        <div className = "element-container" > 
            <img class = "element-icon" src={props.isActive ? "Static/active/" + props.iconSrc : "Static/inactive/" + props.iconSrc}></img>
            {props.isLink ? <a href = {"/" + props.name}  class = "element-name">{props.name}</a> 
            : <div class = "element-name" onClick={buttonClick}>{props.name}</div> }
            {props.name == "Send" ? <Send isActive = {!isHidden}/> : ""}
            {props.name == "Recieve" ? <Recieve isActive = {!isHidden} adress = "0x1233542376527547234"/> : ""}
        </div>
  )
}

export default Element
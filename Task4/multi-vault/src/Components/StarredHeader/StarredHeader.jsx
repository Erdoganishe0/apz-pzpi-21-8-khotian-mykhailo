import React, {useState} from 'react'
import "./StarredHeader.css"



const StarredHeader = (props) => {

    //fetch from db
    const [isStared, setIsStared] = useState(false)

    return (
    <div className='starred-header-container'>
        <div className='starred-container' onClick = {()=>{
            setIsStared(!isStared)
            //fetch change to db
        }}>
            <img class = "star-icon" src={isStared ? "Static/active/star.png" : "Static/inactive/star.png"}></img>
        </div>
    </div>
  )
}

export default StarredHeader
import React from 'react'
import Image from './img/file.jpg'

function Card () {
  return (
    <div>
    <div style ={{border:"3px solid black" ,borderRadius:"8px", background:"skyblue", width:"400px", padding:"20px", paddingLeft:"10px"}}>
      <img style={{borderRadius:"50%", height:"100px", width:"100px"}} src={Image} alt="image" />
        <p>Amro</p>
        <p>Amro@gmail.com</p>

    </div>
    </div>
  )
}

export default Card;
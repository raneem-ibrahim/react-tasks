import React from "react";

function Task12() {
  const number=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
    {number.map((number,index)=>(
      number%2===0 ? <p > is Even:{number}</p> : <p>is Odd:{number}</p>
    ))}
    
   

    </div>
  )
}

export default Task12;
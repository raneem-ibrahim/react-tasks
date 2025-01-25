import React from 'react';



function Task11() {
  const number=[1,2,3,4,5]
  return (
    <div> 
      {number.map((number, index )=>(
        <ul>
          <li><mark>Double</mark> number{number}is{number+number}</li>
        </ul>
      ))}
    
    </div>
  )
}

export default Task11;
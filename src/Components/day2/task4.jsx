import React from 'react'

function User(props) {
  return (
    <div style={{border:"1px solid black", padding:"20px", width:"300px"}}>
   <h1>User Information </h1>
   <p>{props.username}</p>
   <p>{props.Email}</p>
   <p>{props.Age}</p>
    </div>
  )
}

export default User;
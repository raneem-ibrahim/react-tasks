import React from 'react'
function Greeting(props){
    const isLoggedIn=true;
return(
    <div>
        {isLoggedIn ? (<h1>welcome back!</h1>) :(<h1>pleas sign up .</h1>)}
    </div>
)
} 
export default Greeting;
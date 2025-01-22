import React from 'react'
function Success(props){
    const isSuccess=true;
return(
    <div>
        {isSuccess ? (<h1>Success!</h1>) :(<h1>Error</h1>)}
    </div>
)
} 
export default Success;
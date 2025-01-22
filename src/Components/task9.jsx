import React from "react";
function Listitme(){
    const arr=["student1","student2","student3","student"]
    return(
        <div>
           <ul>
            {arr.map((arr ,index) =>(
                <li Key={index}>{arr}</li>
            ))}
           </ul>
        </div>

    )
}
export default Listitme;
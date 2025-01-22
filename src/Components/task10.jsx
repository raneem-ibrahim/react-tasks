import React from "react";
function Items(){
    const item=["student1","student2","student3","student"]
    return(
    <div>
           {item.map((item , index) =>( 
     <div key={index} style={{background :"orange",textAlign: "center",
        padding: "15px",
        margin: "10px"}}>
   {item}
     </div>
       ))}
    </div>
    )
}
export default Items ;
import React from 'react'

function Product(props) {
  return (
    <div>
        <h1>product Details</h1>
        <div style={{background :"orange", width:"300px", padding:"20px" }}>
          <h3>{props.name}</h3>
          <p>{props.price}</p>
          <p>{props.descrbtion}</p>
        </div>


    </div>
  )
}

export default Product;
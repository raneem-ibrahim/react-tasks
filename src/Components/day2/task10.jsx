import React from 'react'
import { useState } from 'react';

function Input () {
    const [text , setText] = useState('');
     const handleChange = (e) => setText(e.target.value);

  return (
    <div>
  <input type ="text" onChange={handleChange} placeholder='typing.........'></input>
  <p>You typed:{text}</p>
    </div>
  )
}

export default Input;

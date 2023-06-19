import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Form = () => {
    const[type,setType] = useState("people")
    const[id,setId] = useState("1")
    const navigate=useNavigate()
    const handle=()=> navigate(`/${type}/${id}`)
    
  return (
    <div>
        <label >Search For:</label>
        <select onChange={(e)=>setType(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>
        <input type="number" onChange={(e)=>setId(e.target.value)}/>
        <button onClick={handle}>Search</button>
    </div>
  )
}

export default Form
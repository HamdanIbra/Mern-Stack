import React, { useState } from 'react'

const CustomInput = (props) => {

    // const [value, setValue] = useState('')
  return (
    <p>{props.label}:<input type="text" onChange={(e) => props.handleInput(e)}/></p>
  )
}

export default CustomInput
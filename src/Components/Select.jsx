import { placeholder } from '@babel/types'
import React from 'react'

const Select = ({
  text, 
  type,
  options, 
  value, 
  name, 
  placeholder,
  onChange
}) => {
  return (
  <div>
    <label htmlFor={name}>{text}</label>
    <select  text={text}
      type={type}
      value={value} 
      name={value}
      onChange={onChange}>

      <option hidden>{placeholder} {name}</option>
      
    </select>
  </div>
  )
}

export default Select
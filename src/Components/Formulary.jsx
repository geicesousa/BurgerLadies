import React from 'react';
import { CustomInput} from '../styles/Input.styled'

const Formulary = ({
  text, 
  type, 
  value, 
  name, 
  placeholder, 
  onChange
}) => {
  return (
  <div>
    <label htmlFor={name}>{text}</label>
    <CustomInput 
      text={text}
      type={type}
      value={value} 
      name={name} 
      placeholder={placeholder}
      onChange={onChange}
    />    
  </div>
  )
}

export default Formulary
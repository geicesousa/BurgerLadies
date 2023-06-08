import React from 'react';
import { CustomInput} from '../styles/Input.styled';

const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,

}) => {
  return ( 
    <CustomInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}   
    />
  );
}
 
export default Input;
import React from 'react';
import { ButtonGlobal } from '../styles/Button.styled';

const Botao = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <ButtonGlobal
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </ButtonGlobal>
   );
}
 
export default Botao;
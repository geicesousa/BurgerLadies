import React from "react";
import { CustomInput } from "../styles/Input.styled";

const Formulary = ({ text, type, value, placeholder, onChange }) => {
  return (
    <div>
      <label>{text}
        <CustomInput
          text={text}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />      
      </label>
    </div>
  );
};

export default Formulary;

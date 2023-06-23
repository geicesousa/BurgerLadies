import { StyledSelect } from "../../Pages/products/Products.styled";

const Select = ({
  text,
  value,
  value1,
  value2,
  value3,
  value4,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      <StyledSelect text={text} value={value} name={name} onChange={onChange}>
        <option hidden>{placeholder}</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
        <option value={value4}>{value4}</option>
      </StyledSelect>
    </>
  );
};

export default Select;

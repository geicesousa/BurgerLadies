const Select = ({
  text, 
  value, 
  value1, 
  value2, 
  value3, 
  value4, 
  name, 
  placeholder,
  onChange
}) => {
  return (
  <div>
    <label htmlFor={name}>{text}</label>
    <select  
      text={text}
      value={value} 
      name={value}
      onChange={onChange}
    >
      <option hidden>{placeholder}</option>
      <option value={value1}>{value1}</option>
      <option value={value2}>{value2}</option>
      <option value={value3}>{value3}</option>
      <option value={value4}>{value4}</option>
    </select>
  </div>
  )
}

export default Select
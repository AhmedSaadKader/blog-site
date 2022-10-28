const FormRow = ({ style, type, name, defaultValue, handleChange, labelText }) => {
  return (
    <div className={style}>
      <label htmlFor={name}>{labelText || name}</label>
      <input type={type} defaultValue={defaultValue} name={name} onChange={handleChange} />
    </div>
  );
};

export default FormRow;

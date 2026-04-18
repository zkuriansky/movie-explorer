const Input = (props) => {
  const { type = "text", id, value, onChange, children, ...rest } = props;
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder=""
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor="headerInput">{children}</label>
    </>
  );
};

export default Input;

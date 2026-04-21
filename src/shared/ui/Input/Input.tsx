import type { InputHTMLAttributes, ReactNode } from "react";

type PropTypes = {
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = (props: PropTypes) => {
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
      <label htmlFor={id}>{children}</label>
    </>
  );
};

export default Input;

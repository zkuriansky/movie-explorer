const Button = (props) => {
  const { children, type = "button", handleFilterMovies } = props;
  return (
    <button type={type} onClick={handleFilterMovies}>
      {children}
    </button>
  );
};

export default Button;

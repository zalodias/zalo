const Button = ({ children }) => {
  return (
    <button
      className={`bg-gradient-to-bl from-neutral-900 via-neutral-800 to-neutral-900 p-2 rounded-lg hover:scale-110 transition-transform`}
    >
      {children}
    </button>
  );
};

export default Button;

const Button = ({ children }) => {
  return (
    <button
      className={`bg-gradient-to-bl from-stone-900 via-stone-800 to-stone-900 p-2 rounded-lg hover:scale-110 transition-transform`}
    >
      {children}
    </button>
  );
};

export default Button;

const Button = ({
  text,
  link,
  className = '',
}: {
  text: string;
  link: string;
  className?: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className={`px-6 py-3 rounded-full bg-black text-white hover:bg-white hover:text-black opacity-100 border-0 ${className}`}
      >
        {text}
      </button>
    </a>
  );
};

export default Button;

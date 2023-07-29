type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="p-1 rounded-sm bg-white hover:bg-gray-200 active:bg-gray-400 active:scale-95 transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;

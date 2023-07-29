type Props = {
  children: React.ReactNode;
  color: string;
};

function Box({ children, color }: Props) {
  return (
    <div
      className={`col-span-1 row-span-1 flex flex-col items-center justify-between gap-8 ${color} p-8 rounded-md`}
    >
      {children}
    </div>
  );
}

export default Box;

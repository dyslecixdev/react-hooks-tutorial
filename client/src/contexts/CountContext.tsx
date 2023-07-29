import { createContext, ReactNode, useState } from "react";

type ContextType = {
  count: number;
  setCount: (count: number) => void;
};

export const CountContext = createContext<ContextType>({
  count: 0,
  setCount: () => null,
});

export const CountContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const value = { count, setCount };

  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

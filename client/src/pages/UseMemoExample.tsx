import { useState, useMemo } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

function UseMemoExample() {
  const [count, setCount] = useState<number>(0);
  const [isWhite, setIsWhite] = useState<boolean>(false);

  const longCalculation = (num: number) => {
    for (let i = 0; i < 1_000_000_000; i++) num += 1;

    return num;
  };

  const memoizedCount = useMemo(() => longCalculation(count), [count]);

  return (
    <Box color="bg-blue-900">
      <h2 className="text-3xl">useMemo</h2>

      <p
        className={`text-xl ${isWhite && "text-white"} transition duration-300`}
      >
        The current memoized number: {memoizedCount}
      </p>

      <div className="w-full flex justify-evenly gap-2">
        <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increase the number
        </Button>

        <Button onClick={() => setIsWhite((prevState) => !prevState)}>
          Change the color
        </Button>
      </div>
    </Box>
  );
}

export default UseMemoExample;

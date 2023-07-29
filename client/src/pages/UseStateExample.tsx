import { useState } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

function UseStateExample() {
  const [count, setCount] = useState<number>(0);
  const [isWhite, setIsWhite] = useState<boolean>(false);

  return (
    <Box color="bg-blue-900">
      <h2 className="text-3xl">useState</h2>

      <p
        className={`text-xl ${isWhite && "text-white"} transition duration-300`}
      >
        The current number: {count}
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

export default UseStateExample;

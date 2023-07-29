import { useContext } from "react";

import Box from "./Box";
import Button from "./Button";

import { CountContext } from "../contexts/CountContext";

function ChildUseContext() {
  const { count, setCount } = useContext(CountContext);

  return (
    <Box color="bg-blue-500">
      <h2 className="text-3xl">useContext Child</h2>

      <p className="text-xl transition duration-300">
        The current number: {count}
      </p>

      <Button onClick={() => setCount(count + 1)}>Increase the number</Button>
    </Box>
  );
}

export default ChildUseContext;

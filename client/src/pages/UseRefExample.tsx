import { useState, useEffect, useRef } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

function UseRefExample() {
  const [rerender, setRerender] = useState<boolean>(true);
  const count = useRef(0);

  const incrementCount = () => {
    count.current = count.current + 1;
  };

  useEffect(() => {
    console.log("UseRef rerendered");
  }, [rerender]);

  return (
    <Box color="bg-blue-300">
      <h2 className="text-3xl">useRef</h2>

      <p className="text-xl transition duration-300">
        The current number: {count.current}
      </p>

      <div className="w-full flex justify-evenly gap-2">
        <Button onClick={incrementCount}>Increase the number</Button>

        <Button onClick={() => setRerender((prevRerender) => !prevRerender)}>
          Rerender
        </Button>
      </div>
    </Box>
  );
}

export default UseRefExample;

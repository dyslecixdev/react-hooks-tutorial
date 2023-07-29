import { useState, useLayoutEffect } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

function UseLayoutEffectExample() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [longText, setLongText] = useState<string[]>([
    "I",
    "appear",
    "before",
    "the",
    "page",
    "first",
    "renders",
  ]);
  const [count, setCount] = useState<number>(0);

  useLayoutEffect(() => {
    setIsShown(true);
  }, []);

  useLayoutEffect(() => {
    if (count > 0)
      setLongText((prevState) =>
        prevState.concat(["and", "when", "you", "click", "the", "button"])
      );
  }, [count]);

  return (
    <Box color="bg-blue-900">
      <h2 className="text-3xl">useLayoutEffect</h2>

      <p
        className={`text-xl ${
          !isShown && "text-green-500"
        } transition duration-300`}
      >
        I appear before the page first renders
      </p>

      <div className="w-full h-[100px] overflow-y-auto">
        <p className="text-xl">{longText.join(" ")}</p>
      </div>

      <Button onClick={() => setCount((prevState) => prevState + 1)}>
        Make the text longer
      </Button>
    </Box>
  );
}

export default UseLayoutEffectExample;

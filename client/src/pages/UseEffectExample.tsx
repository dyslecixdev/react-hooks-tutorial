import { useState, useEffect } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

function UseEffectExample() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [longText, setLongText] = useState<string[]>([
    "I",
    "appear",
    "after",
    "the",
    "page",
    "first",
    "renders",
  ]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count > 0)
      setLongText((prevState) =>
        prevState.concat(["and", "when", "you", "click", "the", "button"])
      );
  }, [count]);

  return (
    <Box color="bg-blue-300">
      <h2 className="text-3xl">useEffect</h2>

      <p
        className={`text-xl ${
          !isShown && "text-transparent"
        } transition duration-300`}
      >
        I appear after the page first renders
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

export default UseEffectExample;

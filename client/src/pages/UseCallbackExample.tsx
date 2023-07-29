import { useState, useCallback } from "react";

import Button from "../components/Button";
import ChildUseCallback from "../components/ChildUseCallback";

function UseCallbackExample() {
  const [longText, setLongText] = useState<string[]>([
    "I",
    "go",
    "on",
    "forever",
  ]);
  const [isWhite, setIsWhite] = useState<boolean>(false);

  const memoAddText = useCallback(() => {
    let num = 0;

    for (let i = 0; i < 1_000_000_000; i++) {
      num += 1;
    }

    if (num === 1_000_000_000)
      setLongText((prevText) => [...prevText, "and", "ever"]);
  }, [longText]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-8 bg-blue-300 p-8 rounded-md">
      <div className="col-span-1 flex flex-col items-center justify-between p-8">
        <h2 className={`${isWhite && "text-white"} text-3xl`}>useCallback</h2>

        <Button onClick={() => setIsWhite((prevState) => !prevState)}>
          Change the color
        </Button>
      </div>

      <ChildUseCallback longText={longText} memoAddText={memoAddText} />
    </div>
  );
}

export default UseCallbackExample;

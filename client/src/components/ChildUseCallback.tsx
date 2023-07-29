import { memo } from "react";

import Box from "./Box";
import Button from "./Button";

type Props = {
  longText: string[];
  memoAddText: () => void;
};

function ChildUseCallback({ longText, memoAddText }: Props) {
  console.log("ChildUseCallback rerendered");

  return (
    <Box color="bg-blue-500">
      <h2 className="text-3xl">useCallback Child</h2>

      <div className="w-full h-[100px] overflow-y-auto">
        <p className="text-xl transition duration-300">{longText.join(" ")}</p>
      </div>

      <Button onClick={() => memoAddText()}>Make the text longer</Button>
    </Box>
  );
}

export default memo(ChildUseCallback);

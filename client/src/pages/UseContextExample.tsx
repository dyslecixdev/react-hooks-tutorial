import { useContext } from "react";

import Button from "../components/Button";
import ChildUseContext from "../components/ChildUseContext";

import { CountContext } from "../contexts/CountContext";

function UseContextExample() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 gap-8 bg-blue-900 p-8 rounded-md">
      <div className="row-span-1 col-span-1 flex flex-col items-center justify-between p-8">
        <h2 className="text-3xl">useContext</h2>

        <p className="text-xl transition duration-300">
          The current number: {count}
        </p>

        <Button onClick={() => setCount(count + 1)}>Increase the number</Button>
      </div>

      <ChildUseContext />
    </div>
  );
}

export default UseContextExample;

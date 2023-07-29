import { useReducer } from "react";

import Box from "../components/Box";
import Button from "../components/Button";

type State = {
  count: number;
  isWhite: boolean;
};

type Action = {
  type: "increment" | "changeBoolean";
};

function UseReducerExample() {
  const initialState = {
    count: 0,
    isWhite: false,
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "changeBoolean":
        return { ...state, isWhite: !state.isWhite };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Box color="bg-blue-300">
      <h2 className="text-3xl">useReducer</h2>

      <p
        className={`text-xl ${
          state.isWhite && "text-white"
        } transition duration-300`}
      >
        The current number: {state.count}
      </p>

      <div className="w-full flex justify-evenly gap-2">
        <Button onClick={() => dispatch({ type: "increment" })}>
          Increase the number
        </Button>

        <Button onClick={() => dispatch({ type: "changeBoolean" })}>
          Change the color
        </Button>
      </div>
    </Box>
  );
}

export default UseReducerExample;

import UseStateExample from "./pages/UseStateExample";
import UseReducerExample from "./pages/UseReducerExample";
import UseEffectExample from "./pages/UseEffectExample";
import UseLayoutEffectExample from "./pages/UseLayoutEffectExample";
import UseMemoExample from "./pages/UseMemoExample";
import UseCallbackExample from "./pages/UseCallbackExample";
import UseRefExample from "./pages/UseRefExample";
import UseContextExample from "./pages/UseContextExample";

import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      <header className="h-[20vh] w-full p-4 flex justify-center items-center gap-4 md:gap-10 bg-black">
        <h1 className="text-5xl text-white">React Hooks Tutorial</h1>
        <img src={reactLogo} alt="React logo" className="h-20 w-20" />
      </header>

      <main className="w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <UseStateExample />
        <UseReducerExample />
        <UseEffectExample />
        <UseLayoutEffectExample />
        <UseMemoExample />
        <UseCallbackExample />
        <UseRefExample />
        <UseContextExample />
      </main>
    </>
  );
}

export default App;


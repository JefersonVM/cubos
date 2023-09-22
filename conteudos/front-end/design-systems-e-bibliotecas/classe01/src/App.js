import { useEffect } from "react";
import "./App.css";
import { useLocalStorage } from "react-use";

function App() {
  const [value, setValue, remove] = useLocalStorage("user", {
    name: "Jeferson Vieira",
    age: 42,
  });

  useEffect(() => {
    console.log('Mudou o valor');
  }, [value]);

  return (
    <div className="App">
      <div>
        <h1>useLocalStorage</h1>
        <div>Value: {value.name}</div>
        <button onClick={() => setValue({ name: "rodrigo", age: 49 })}>
          bar
        </button>
        <button onClick={() => remove()}>Remove</button>
      </div>
    </div>
  );
}

export default App;

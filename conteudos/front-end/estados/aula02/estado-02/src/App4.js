import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((countPrev) => {
      console.log(countPrev, "Primeiro countPrev");
      return countPrev + 1;
    });

    setCount((countPrev) => {
      console.log(countPrev, "Segundo countPrev");
      return countPrev + 1;
    });
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => handleIncrement()}>Incrementar</button>
    </div>
  );
}

export default App;

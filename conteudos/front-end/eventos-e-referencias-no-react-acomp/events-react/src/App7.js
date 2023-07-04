import "./App.css";
import { useRef } from "react";

function App() {
  let count = 0;
  const countref = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  function incrementRef() {
    countref.current += 1;
    spanRef.current.innerText = countref.current;
  }
  function incrementLet() {
    count += 1;
    spanLetRef.current.innerText = count; 
  }
  return (
    <div className="App">
      <div>
        <button onClick={incrementRef}>Incrementar useRef</button>
        <div>
          <strong style={{ marginRight: "10px" }}>Valor do useRef</strong>
          <span ref={spanRef}>{countref.current}</span>
        </div>
      </div>
      <div>
        <button onClick={incrementLet}>Incrementar let</button>
        <div>
          <strong style={{ marginLeft: "10px" }}>Valor do Let</strong>
          <span ref={spanLetRef}>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

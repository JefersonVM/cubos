import { useEffect, useState } from 'react';
import "./style.css";

function Main() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffect sem array de dependências ');
  });
  
  return <div className="container">
   <div className="container-count">
    <h1>Contador 1</h1>
   <h2>{count}</h2>
    <button onClick={() => setCount(count + 1)}>Incrementar 1</button>
   </div>

   <div className="container-count">
    <h1>Contador 2</h1>
   <h2>{count2}</h2>
    <button onClick={() => setCount2(count2 + 1)}>Incrementar 2</button>
   </div>
  </div>;
}

export default Main;

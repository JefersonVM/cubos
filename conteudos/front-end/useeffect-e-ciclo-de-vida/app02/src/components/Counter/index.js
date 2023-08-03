import { useEffect, useState } from "react";
import "./style.css";

function Counter({handleChangeText}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
   
    handleChangeText('Montei um component Counter');

    return () => {
      handleChangeText('Desmontei um component Counter');
    };
  }, []);



  return (
    <div className="container-counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    
    </div>
  );
}

export default Counter;

import { useState } from 'react';
import Counter from '../../components/Counter';
import "./style.css";

function Main() {
  const [showCount, setShowCount] = useState(false);
  const [text, setText] = useState('');

  function handleChangeText(newText){
    setText(newText);
  }
  return (
    <div className="container">
      {text}
      <button onClick={() => setShowCount(!showCount)}>Exibir/Ocultar</button>
      {showCount &&  <Counter 
      handleChangeText={handleChangeText}
      />}
      
     
    
    </div>
  );
}

export default Main;

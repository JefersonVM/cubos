import "./App.css";

function App() {
  function handleInput(event) {
  
    const h1 = document.querySelector('h1');

    h1.innerText = event.target.value;
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Digite uma mensagem"
        onInput={(event) => handleInput(event)}
      ></input>
      <h1></h1>
    </div>
  );
}

export default App;

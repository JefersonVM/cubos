import "./App.css";

function App() {
  function handleAddTask() {
    console.log("Entrou na função");

    const input = document.querySelector("#input-task");
    const ul = document.querySelector("ul");

    if (!input.value) {
      return;
    }

    const li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    input.value = "";
  }

  return (
    <div className="App">
      <input type="text" placeholder="Adicionar nova tarefa" id="input-task" />
      <button onClick={() => handleAddTask()}>Clicar</button>
      <ul></ul>
    </div>
  );
}

export default App;

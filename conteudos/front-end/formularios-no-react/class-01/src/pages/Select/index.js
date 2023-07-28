import { useState } from "react";
import "./style.css";

function Select() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [select, setSelect] = useState({id: '', name: ''});
  const [options, setOption] = useState([
    {
      id: 1,
      name: "Maçã",
      value: 100,
    },
    {
      id: 2,
      name: "Banana",
      value: 200,
    },
    {
      id: 3,
      name: "Abacate",
      value: 500,
    },
    {
      id: 4,
      name: "Laranja",
      value: 800,
    },
  ]);

  function cleanForm() {
    setError("");
    setSuccess("");
  }

  function handleChangeSelect(e) {
    const localOptions = [...options];

    const myOption = localOptions.find(
      (item) => item.id === parseInt(e.target.value)
    );

    setSelect({id: myOption.id, name: myOption.name});
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container-main">
      <form onSubmit={handleSubmit}>
        {select.name}
        <select value={select.id} onChange={(e) => handleChangeSelect(e)}>
          {options.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit">Salvar</button>
        <button type="button" onClick={cleanForm}>
          Limpar
        </button>
      </form>
    </div>
  );
}

export default Select;

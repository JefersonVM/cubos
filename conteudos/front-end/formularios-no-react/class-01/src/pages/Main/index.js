import { useState } from "react";
import "./style.css";

function Main() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [address, setAddress] = useState("");

  function cleanForm() {
    setError("");
    setSuccess("");
    setAge("");
    setName("");
    setPassword("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setAddress("");

    if (!name) {
      setError("O nome é obrigatório...");
      return;
    }

    if (age < 18) {
      setError("Você precisa ser maior de idade...");
    }

    if (password.length < 8) {
      setError("A senha deve ter mais de 7 caracteres");
      return;
    }

    if (!address){
      setError("Você precisa informar um endereço:");
      return; 
    }

    setSuccess("Tudo certo!");
  }

  return (
    <div className="container-main">
      <form onSubmit={handleSubmit}>
        <span>{name}</span>
        <input
          type="text"
          placeholder="Digite seu nome:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Digite sua idade:"
          value={age}
          onChange={(e) => setAge(e.target.valueAsNumber)}
        />
         <input
          type="text"
          placeholder="Digite seu endereço:"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}
        <button type="submit">Salvar</button>
        <button type="button" onClick={cleanForm}>
          Limpar
        </button>
      </form>
    </div>
  );
}

export default Main;

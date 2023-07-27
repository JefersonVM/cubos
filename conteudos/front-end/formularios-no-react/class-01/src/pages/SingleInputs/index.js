import { useState } from "react";
import "./style.css";

function SingleInputs() {
 
  
  const [form, setForm] = useState({
    name: "",
    age: 0,
    address: "",
    password: "",
    
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
 

  function cleanForm() {
    setError("");
    setSuccess("");
    
    setForm ({
      name: "",
      age: 0,
      address: "",
      password: ""


    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess("");
   

    if (!form.name) {
      setError("O nome é obrigatório...");
      return;
    }

    if (form.age < 18) {
      setError("Você precisa ser maior de idade...");
    }

    if (form.password.length < 8) {
      setError("A senha deve ter mais de 7 caracteres");
      return;
    }

    if (!form.address){
      setError("Você precisa informar um endereço:");
      return; 
    }

    setSuccess("Tudo certo!");
  }

  function handleChangeForm(e){
    console.log(e.target.name);
  }

  return (
    <div className="container-main">
      <form onSubmit={handleSubmit}>
        <span>{form.name}</span>
        <input
          type="text"
          placeholder="Digite seu nome:"
          name="name"
          value={form.name}
          onChange={(e) => handleChangeForm(e)}
        />
        <input
          type="number"
          placeholder="Digite sua idade:"
          name="age"
          value={form.age}
          onChange={(e) => handleChangeForm(e)}
        />
         <input
          type="text"
          placeholder="Digite seu endereço:"
          name="address"
          value={form.address}
          onChange={(e) => handleChangeForm(e)}
        />
        <input
          type="password"
          placeholder="Digite sua senha:"
          name="password"
          value={form.password}
          onChange={(e) => handleChangeForm(e)}
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

export default SingleInputs;

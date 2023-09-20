import { useState } from "react";
import "./styles.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function EditProfile() {
  const { setName, setAge } = useContext(UserContext);
  const [localName, setLocalName] = useState("");
  const [localAge, setLocalAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!localName) {
      return;
    }

    setName(localName);
    setAge(localAge);
    setLocalName("");
    setLocalAge("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome
        <input
          placeholder="Nome do usuário"
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
        />
      </label>
      <label>
        Idade
        <input
          placeholder="Idade do usuário"
          value={localAge}
          onChange={(e) => setLocalAge(e.target.value)}
        />
      </label>
      <button>Editar</button>
    </form>
  );
}

export default EditProfile;

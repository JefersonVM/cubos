import { useState } from "react";
import "./styles.css";

function EditProfile({ setName }) {
  const [localName, setLocalName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!localName) {
      return;
    }

    setName(localName);
    setLocalName("");
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
      <button>Editar</button>
    </form>
  );
}

export default EditProfile;

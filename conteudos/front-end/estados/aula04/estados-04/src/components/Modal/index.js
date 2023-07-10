import { useState } from "react";
import "./styles.css";

function Modal({ handleToggleModal, modalOpen, setPosts, posts }) {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  function handleAddNewPost() {
    if (!input || !textArea) {
      return;
    }
    const newPost = {
      id: posts[posts.length - 1].id + 1,
      title: input,
      text: textArea,
    };

    setPosts([...posts, newPost]);

    setInput("");
    setTextArea("");

    handleToggleModal();
  }

  return (
    <>
      {modalOpen && (
        <div className="backdrop">
          <div className="modal">
            <h2>Criar post</h2>
            <input
              type="text"
              placeholder="Título"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <textarea
              placeholder="Texto"
              value={textArea}
              onChange={(event) => setTextArea(event.target.value)}
            />

            <button onClick={handleAddNewPost} className="btn-primary">
              Cadastrar novo post
            </button>
            <button onClick={handleToggleModal} className="btn-secondary">
              Fechar cadastro
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

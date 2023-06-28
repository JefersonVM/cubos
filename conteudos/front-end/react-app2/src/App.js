import "./App.css";
import MinhaImagem from "./assets/minha-foto.jpg";

function App() {
  return (
    <div className="container">
      <header>
        <h2>Jeferson.dev</h2>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </header>
      <section>
        <div className="left">
          <img src={MinhaImagem} alt="Minha Foto" />
          <br />
          <strong>Jeferson Vieira</strong>
          <span>
            <br />
            Eu sou Jeferson Vieira, sou aluno de Desenvolvimento de Software
            Full Stack na Cubos Academy.{" "}
          </span>
        </div>
        <div className="right">
          <strong>22 de novembro de 2030</strong>
          <h2> Introdução ao React</h2>
          <span>
            Nesse post nós iremos falar sobre como o React, é importante para o
            desenvolvedor frontend moderno.{" "}
          </span>
          <a href="#">Ler mais</a>
        </div>
      </section>
      <footer>
        <ul className="menu">
          <li>Artigos</li>
          <li>Contatos</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

import "./App.css";
import UserCard from "./components/UserCard/index";
import Imagem from "./assets/minha-foto.jpg";

function App() {
  return (
    <div className="container">
      <UserCard name="Jeferson Vieira" jobRole="Desenvolvedor Full Stack" avatar={Imagem} />
      <UserCard name="Maria Paula" jobRole="Professora Backend" avatar="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg"/>
    </div>
  );
}

export default App;

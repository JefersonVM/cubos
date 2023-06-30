import "./App.css";
import Avatar from "./components/Avatar";
import UserCard from "./components/UserCard/index";
import Imagem from "./assets/minha-foto.jpg";

function App() {
  return (
    
    <div className="container">
      {1 === 2 ? <strong>Verdadeiro</strong> : <strong>Falso</strong>}
      <UserCard name="Jeferson Vieira" jobRole="Desenvolvedor Full Stack">
        {" "}
        <Avatar avatar={Imagem} />
      </UserCard>
      <UserCard name="Maria Paula" jobRole="Professora Backend">
        {" "}
        <Avatar avatar="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg" />
      </UserCard>
    </div>
  );
}

export default App;

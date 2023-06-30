import Imagem from "../../assets/minha-foto.jpg";
import "./styles.css";

export default function UserCard(props) {
    console.log(props);
 
  return (
    <div className="user-card">
      <img src={Imagem} alt="Minha foto" />
      <strong>Jefeson Vieira</strong>
      <span>Aluno Full Stack</span>
      <button>Connect</button>
    </div>
  );
}

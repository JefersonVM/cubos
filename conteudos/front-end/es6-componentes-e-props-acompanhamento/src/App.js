
import './App.css';
import Imagem from '../src/assets/minha-foto.jpg';

const UserCard = () => {

  return (
    <div className='user-card'>
      <img src={Imagem} alt='Minha foto'/>
      <strong>Jefeson Vieira</strong>
      <span>Aluno Full Stack</span>
      <button>Connect</button>
    </div>
  )

}

function App() {
  return (
    <div>
      <UserCard/>
    </div>
  );
}

export default App;

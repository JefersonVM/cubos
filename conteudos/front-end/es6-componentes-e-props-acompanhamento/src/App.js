import "./App.css";
import UserCard from "./components/UserCard/index";

const users = [{ nome: "Jefeson " }, { segundoNome: "Vieira" }];
const user = { nome: "Jeferson", idade: 41 };

function App() {
  return (
    <div>
      <UserCard />
    </div>
  );
}

export default App;

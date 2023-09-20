import "./styles.css";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

function Header() {
  const { name } = useContext(UserContext);

  return <header>Bem vindo, {name}!</header>;
}

export default Header;

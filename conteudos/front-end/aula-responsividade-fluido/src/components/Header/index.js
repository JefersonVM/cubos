import "./style.css";
import Logo from "../../assets/logo.svg";
import Menu from "../Menu";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" className="logo" />
      <Menu/>
    </header>
  );
}

export default Header;

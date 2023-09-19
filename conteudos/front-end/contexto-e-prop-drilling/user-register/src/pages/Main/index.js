import EditProfile from "../../components/EditProfile";
import "./styles.css";

function Main({ setName }) {
  return (
    <main>
      <EditProfile setName={setName} />
    </main>
  );
}

export default Main;

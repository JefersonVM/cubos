import EditProfile from "../../components/EditProfile";
import UserProfile from "../../components/UserProfile";
import "./styles.css";

function Main() {
  return (
    <main>
      <div className="container-main left">
        <EditProfile />
      </div>
      <div className="container-main">
        <UserProfile />
      </div>
    </main>
  );
}

export default Main;

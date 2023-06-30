
import "./styles.css";

export default function UserCard({name, jobRole, avatar}) {
   
 
  return (
    <div className="user-card">
      <img src={avatar} alt="Minha foto" />
      <strong>{name}</strong>
      <span>{jobRole}</span>
      <button>Connect</button>
    </div>
  );
}

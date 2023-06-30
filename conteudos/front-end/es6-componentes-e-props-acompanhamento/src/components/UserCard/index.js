import "./styles.css";

export default function UserCard({ name, jobRole, children }) {
  return (
    <div className="user-card">
      {children}
      <strong>{name}</strong>
      <span>{jobRole}</span>
      <button className="btn-card">Connect</button>
    </div>
  );
}

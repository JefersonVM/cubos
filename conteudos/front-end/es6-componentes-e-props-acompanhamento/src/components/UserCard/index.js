import "./styles.css";
import BadgeVerify from "../../assets/secure.svg";

export default function UserCard({
  name,
  jobRole,
  following,
  children,
  verify,
  tag,
}) {
  return (
    <div className="user-card">
      {verify && (
        <img className="badge-secure" src={BadgeVerify} alt="verify" />
      )}
      {tag}
      {children}

      <strong>{name}</strong>
      <span>{jobRole}</span>
      {
        <button
          className={`btn-card 
            ${following ? "following" : "unfollowing"}`}
        >
          {following ? "Connected" : "Connect"}
        </button>
      }
    </div>
  );
}

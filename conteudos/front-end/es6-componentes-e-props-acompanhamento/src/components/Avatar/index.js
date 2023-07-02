import "./styles.css";

export default function Avatar({ avatar, color }) {
  return (
    <div
      className="avatar-img"
      style={{
        backgroundImage: `url(${avatar})`,
        border: `4px solid ${color}`,
      }}
    />
  );
}

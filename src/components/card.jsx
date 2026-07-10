export default function Card({ image, name }) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export default function Score({ score, bestScore }) {
  return (
    <div className="score-container">
      <h2>Score: {score}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
}

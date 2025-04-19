export function JokeDisplay({ content }) {
  return (
    <div className="joke">
      {content || "Clique sur le bouton pour une blague"}
    </div>
  );
}
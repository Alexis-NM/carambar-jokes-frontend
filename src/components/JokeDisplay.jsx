import React from "react";

export function JokeDisplay({ content }) {
  const text = content || "Clique sur le bouton pour une blague";
  const parts = text.split("?").map((part, index, arr) => {
    const suffix = index < arr.length - 1 ? "?\n" : "";
    return part + suffix;
  });

  return (
    <article className="joke">
      {parts.map((segment, idx) => (
        <React.Fragment key={idx}>
          {segment}
          {idx < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </article>
  );
}

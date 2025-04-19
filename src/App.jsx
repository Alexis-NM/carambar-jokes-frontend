import { useState } from "react";
import { ButtonRandom } from "./components/ButtonRandom";
import { JokeDisplay } from "./components/JokeDisplay";
import { fetchRandomJoke } from "./api/jokeApi";

function App() {
  const [joke, setJoke] = useState("");

  const loadJoke = async () => {
    try {
      const data = await fetchRandomJoke();
      setJoke(data.content);
    } catch (err) {
      setJoke("Erreur lors du chargement de la blague.");
    }
  };

  return (
    <div className="app">
      <h1>Carambar & Co</h1>
      <JokeDisplay content={joke} />
      <ButtonRandom onClick={loadJoke} />
    </div>
  );
}

export default App;
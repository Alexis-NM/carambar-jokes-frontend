import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import { JokeDisplay } from "./components/JokeDisplay";
import { fetchRandomJoke } from "./api/jokeApi";
import "./App.scss";

function App() {
  const [joke, setJoke] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const openOverlay = async () => {
    try {
      const data = await fetchRandomJoke();
      setJoke(data.content);
      setOverlayVisible(true);
    } catch {
      setJoke("Erreur lors du chargement de la blague.");
      setOverlayVisible(true);
    }
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setJoke("");
  };

  return (
    <section className="App">
      <LandingPage onClick={openOverlay} />
      <AnimatePresence>
        {overlayVisible && (
          <Motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Motion.div
              className="wrapper"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: "top center" }}
            >
              <button className="close-button" onClick={closeOverlay}>
                ×
              </button>
              <JokeDisplay content={joke} />
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default App;

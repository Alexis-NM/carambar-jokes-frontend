import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import { JokeDisplay } from "./components/JokeDisplay";
import { useRandomJoke } from "./api/jokeApi";
import "./App.scss";

function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const { joke, loadJoke } = useRandomJoke();

  const openOverlay = async () => {
    try {
      await loadJoke();
      setOverlayVisible(true);
    } catch {
      setOverlayVisible(true);
    }
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
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
              <JokeDisplay
                content={
                  joke?.content || "Erreur lors du chargement de la blague."
                }
              />
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default App;

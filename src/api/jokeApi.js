import { useState, useRef, useCallback } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export function useRandomJoke() {
  const [joke, setJoke] = useState(null);
  const lastJokeIdRef = useRef(null);

  const loadJoke = useCallback(async () => {
    const { data } = await axios.get(`${API_BASE}/jokes/random`, {
      params: lastJokeIdRef.current
        ? { lastJokeId: lastJokeIdRef.current }
        : {},
    });
    lastJokeIdRef.current = data.id;
    setJoke(data);
  }, []);

  return { joke, loadJoke };
}

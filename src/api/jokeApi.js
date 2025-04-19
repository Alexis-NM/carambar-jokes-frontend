import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchRandomJoke = () =>
  axios.get(`${API_BASE}/jokes/random`).then(res => res.data);

export const fetchAllJokes = () =>
  axios.get(`${API_BASE}/jokes`).then(res => res.data);
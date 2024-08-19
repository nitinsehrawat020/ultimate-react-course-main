import { useState, useEffect } from "react";
const KEY = "e3b0b1da";

export function useMovie(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();

      const controller = new AbortController();

      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.singal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with loading movie");

          const data = await res.json();

          if (data.Response === "False") throw new Error(data.Error);

          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      const timer = setTimeout(fetchMovie, 700);
      // Clean up function
      return () => clearTimeout(timer);
    },
    [query]
  );
  return { isLoading, movies, error };
}

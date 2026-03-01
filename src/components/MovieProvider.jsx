import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { MovieContext } from "../MovieContext";

const MovieProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const [allMovies, setallMovies] = useState([]);
  const [loading, setloading] = useState(true);
  const [displaytext, setdisplaytext] = useState("");
  const [showcaseMovieState, setshowcaseMovieState] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${api_url}?api_key=${api_key}`);
      setallMovies(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  // const popularMovies = [...allMovies];
  // popularMovies.sort((a, b) => a.popularity - b.popularity).splice(0, 10);

  // const trendingMovies = [...allMovies];
  // trendingMovies.sort((a, b) => a.vote_count - b.vote_count).splice(0, 10);

  const popularMovies = useMemo(() => {
    return [...allMovies]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 10);
  }, [allMovies]);

  const trendingMovies = useMemo(() => {
    return [...allMovies]
      .sort((a, b) => b.vote_count - a.vote_count)
      .slice(0, 10);
  }, [allMovies]);
  const recommendMovies = useMemo(() => {
    return [...allMovies]
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0, 10);
  }, [allMovies]);

  const newReleases = useMemo(() => {
    return [...allMovies]
      .filter((movie) => movie.release_date)
      .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      .slice(0, 10);
  }, [allMovies]);

  // const [showcaseMovie, setshowcaseMovie] = useState(popularMovies[9]);

  return (
    <MovieContext.Provider
      value={{
        allMovies,
        loading,
        displaytext,
        setdisplaytext,
        popularMovies,
        trendingMovies,
        showcaseMovieState,
        setshowcaseMovieState,
        newReleases,
        recommendMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

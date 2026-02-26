import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieContext } from "../MovieContext";

const MovieProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_API_URL;
  const api_key = import.meta.env.VITE_API_KEY;

  const [allMovies, setallMovies] = useState([]);
  const [loading, setloading] = useState(true);
  const [displaytext, setdisplaytext] = useState("");

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

  const popularMovies = [...allMovies]
  popularMovies.sort((a, b) => a.popularity - b.popularity).splice(0, 10);
  const [showcaseMovie, setshowcaseMovie] = useState(popularMovies[0])  


  return (
    <MovieContext.Provider
      value={{
        allMovies,
        loading,
        displaytext,
        setdisplaytext,
        popularMovies,
        showcaseMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;

import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Display from "../Display";
import { MovieContext } from "../MovieContext";

const Landing = () => {
  const { allMovies, loading, bgImage, setbgImage } = useContext(MovieContext);
  const Popular = allMovies?.reduce(
    (max, movie) => (movie.popularity > max.popularity ? movie : max),
    allMovies[0],
  );
  useEffect(() => {
    if (allMovies.length > 0 && !bgImage) {
      setbgImage(
        `https://image.tmdb.org/t/p/original${allMovies[0].backdrop_path}`,
      );
    }
  }, [allMovies, bgImage, setbgImage]);
  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  if (loading || allMovies.length === 0) {
    return <div className="">loading...</div>;
  }
  setbgImage(Popular.backdrop_path)
    ? `https://image.tmdb.org/t/p/original${Popular.backdrop_path}`
    : "";
  return (
    <div>
      {" "}
      <div
        className="relative pt-2 "
        style={{
          backgroundImage: `url(${imageBaseURL}${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <div className="relative z-20">
          {" "}
          <Navbar />
          <Display />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Landing;

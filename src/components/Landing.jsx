import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Display from "../Display";
import { MovieContext } from "../MovieContext";
import Others from "../Others";
import Footer from "../footer";

const Landing = () => {
  // const { allMovies, loading, popularMovies } = useContext(MovieContext);

  // const Popular = allMovies?.reduce(
  //   (max, movie) => (movie.popularity > max.popularity ? movie : max),
  //   allMovies[0],
  // );

  // const [bgImage, setbgImage] = useState(null)

  // if (loading || allMovies.length === 0) {
  //   return <div className="">loading...</div>;
  // }

  // const [showcaseMovie, setshowcaseMovie] = useState(popularMovies && popularMovies[0]);

  // setbgImage(showcaseMovie?.backdrop_path)
  //   ? `https://image.tmdb.org/t/p/original${showcaseMovie.backdrop_path}`
  //   : "";

  //   const handleClick = (movie) => {
  //     setshowcaseMovie(movie);
  //   }

  return (
    <div className="">
      <div className="relative  ">
        <div className="relative-4">
          <Navbar />
          <Display />
          <Others />
          <Footer />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Landing;

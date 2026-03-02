import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "./MovieContext";

const Display = () => {
  const {
    allMovies,
    displaytext,
    setdisplaytext,
    popularMovies,
    showcaseMovieState,
    setshowcaseMovieState,
  } = useContext(MovieContext);

  console.log(popularMovies);

  let showcaseMovie = popularMovies && popularMovies[9];

  useEffect(() => {
    if (!showcaseMovieState && popularMovies?.length) {
      setshowcaseMovieState(popularMovies[0]);
    }
  }, [popularMovies, showcaseMovieState]);

  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imageBaseURL}${showcaseMovieState?.backdrop_path}) center center`,
        minHeight: "100vh",
      }}
      className="w-full relative top-0 flex flex-col gap-4 justify-start px-6 pt-[5%] md:pt-[10%] bg-cover! bg-no-repeat"
    >
      <div className="w-full flex flex-col gap-4 mt-40">
        <div>
          <h2 className="text-white font-bold text-[28px] mb-4 leading-10">
            {showcaseMovieState?.title}(
            {showcaseMovieState?.release_date.split("-").splice(0, 1)})
          </h2>
          <p className="text-white text-[14px] w-full md:w-[40%] font-semibold leading-6">
            {showcaseMovieState?.overview}
          </p>
        </div>
        {/* for more details */}
        <div className="w-full flex flex-wrap gap-4 md:gap-0 justify-between items-center">
          {/* for the left side */}
          <div className="flex flex-col items-start flex-wrap gap-4 border-l-15 border-red-700 pl-4 text-white">
            <div className="flex gap-4">
              <h1 className="underline">Action</h1>
              <h1 className="underline">Thriller</h1>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <h1 className="font-bold">IMDB {showcaseMovie?.vote_average}</h1>
              <h1 className="tracking-tight font-semibold">2 h 18 min</h1>
              <h1 className="bg-[#7C7C7C] text-[white rounded-[5px] px-2">
                {showcaseMovie?.adult === true ? "18+" : "PG"}
              </h1>
              <button className="border-[1.5px] border-[#950000] px-4 py-2">
                Watch Trailer
              </button>
            </div>
          </div>
          {/* for the right side */}
          <button className="text-white bg-[#950000] rounded-[8px] cursor-pointer hover:bg-red-600 transition-all px-8 py-2">
            Watch Now
          </button>
        </div>
      </div>

      <div className="grid grid-flow-col auto-cols-auto gap-x-3 overflow-x-auto">
        {popularMovies?.map((movie, index) => (
          <div
            className={`transition-all duration-300 cursor-pointer w-50 h-40 overflow-hidden hover:opacity-90
      ${showcaseMovieState?.id === movie.id ? "scale-115" : "opacity-70 "}
    `}
            key={index}
          >
            <img
              onClick={() => setshowcaseMovieState(movie)}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;

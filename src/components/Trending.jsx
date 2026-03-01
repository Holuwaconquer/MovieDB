import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Trending = () => {
  const { trendingMovies, setshowcaseMovieState, showcaseMovieState } =
    useContext(MovieContext);
  return (
    <div className="">
      <div className="flex justify-between">
        {" "}
        <h1 className="text-white text-xl font-bold  my-2 ">Trending</h1>{" "}
        <p className="underline">see more</p>
      </div>

      <div className="grid grid-flow-col auto-cols-auto gap-x-3 overflow-x-auto whitespace-nowrap">
        {trendingMovies?.map((trending, index) => (
          <div
            className={`transition-all duration-300 cursor-pointer w-50 h-40 overflow-hidden hover:opacity-90
      ${showcaseMovieState?.id === trending.id ? "scale-115" : "opacity-70 "}`}
            key={trending.id}
          >
            <img
              onClick={() => setshowcaseMovieState(trending)}
              src={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`}
              alt=""
            />
            <p className="text-center tracking-tighter ">
              {trending.title.split(" ").splice(0, 3).join(" ")} (
              {trending.release_date.split("-").splice(0, 1)})...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

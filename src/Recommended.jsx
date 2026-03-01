import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Recommended = () => {
  const {
    trendingMovies,
    setshowcaseMovieState,
    showcaseMovieState,
    recommendMovies,
  } = useContext(MovieContext);
  return (
    <div>
      {" "}
      <div className="">
        <div className="flex justify-between">
          {" "}
          <h1 className="text-white text-xl font-bold  my-2 ">
            Recommended
          </h1>{" "}
          <p className="underline">see more</p>
        </div>

        <div className="grid grid-flow-col auto-cols-auto gap-x-3 overflow-x-auto whitespace-nowrap">
          {trendingMovies?.map((recommend, index) => (
            <div
              className={`transition-all duration-300 cursor-pointer w-50 h-40 overflow-hidden hover:opacity-90
      ${showcaseMovieState?.id === recommend.id ? "scale-115" : "opacity-70 "}`}
              key={recommend.id}
            >
              <img
                onClick={() => setshowcaseMovieState(recommend)}
                src={`https://image.tmdb.org/t/p/original${recommend.backdrop_path}`}
                alt=""
              />
              <p className="text-center tracking-tighter ">
                {recommend.title.split(" ").splice(0, 3).join(" ")} (
                {recommend.release_date.split("-").splice(0, 1)})...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;

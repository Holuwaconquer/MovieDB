import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Display = () => {
  // const { allMovies } = useContext(MovieContext);
  const { allMovies, bgImage, setbgImage, displaytext, setdisplaytext } =
    useContext(MovieContext);
  const Popular = allMovies?.reduce(
    (max, movie) => (movie.popularity > max.popularity ? movie : max),
    allMovies[0],
  );

  return (
    <div>
      <div className="mt-10 p-10">
        <h2 className="text-white font-bold">
          {Popular.title}({Popular.release_date.split("-").splice(0, 1)})
        </h2>
        <p className="text-white">{displaytext || Popular.overview}</p>
      </div>
      <div className="grid grid-flow-col auto-cols-auto gap-x-2 overflow-x-auto whitespace-nowrap mt-65 ">
        {allMovies.map((movie, index) => (
          <div className="w-50 h-40 " key={index}>
            <img
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

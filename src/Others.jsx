import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { FaSearch, FaBars } from "react-icons/fa";
import Trending from "./components/Trending";
import { FaFilter } from "react-icons/fa6";
import Recommended from "./Recommended";

const Others = () => {
  const {
    allMovies,
    displaytext,
    setdisplaytext,
    popularMovies,
    newReleases,
    setshowcaseMovieState,
    showcaseMovieState,
  } = useContext(MovieContext);
  return (
    <div
      className=" text-white py-3 px-6"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("src/assets/a01d427d12f5bea21f9ed74a0640c8f0ba3752a5.jpg") center center`,
        maxHeight: "1946px",
      }}
    >
      <div className="flex justify-between">
        <div className=" py-2  my-5 px-5 border-l w-35 border-red-500 flex items-center text-white bg-black/70 rounded-sm">
          {" "}
          <input
            type="text"
            placeholder="search"
            className="outline-none border-none w-20 text-white"
          />{" "}
          <FaSearch className="text-red-500 size-7 cursor-pointer" />
        </div>
        <div className="py-2 my-5 px-3 border-b w-30 border-red-500 flex items-center text-white bg-black/70  rounded-sm justify-around">
          <FaFilter className="size-7 text-red-600" /> <p>Filter</p>
        </div>
      </div>

      <Trending />
      <div className="flex justify-between">
        <h1 className=" text-white text-xl font-bold  my-2">New Releases</h1>{" "}
        <p className="underline">see more</p>
      </div>

      <div className="grid grid-flow-col auto-cols-auto gap-x-3 overflow-x-auto whitespace-nowrap ">
        {newReleases?.map((releases, index) => (
          <div
            className={`transition-all duration-300 cursor-pointer w-50 h-40 overflow-hidden hover:opacity-90
      ${showcaseMovieState?.id === releases.id ? "scale-115" : "opacity-70 "}
    `}
            key={releases.id}
          >
            <img
              onClick={() => setshowcaseMovieState(releases)}
              src={`https://image.tmdb.org/t/p/original${releases.backdrop_path}`}
              alt=""
            />
            <p className="text-center tracking-tighter  ">
              {releases.title.split(" ").splice(0, 3).join(" ")} (
              {releases.release_date.split("-").splice(0, 1)})..
            </p>
          </div>
        ))}
      </div>
      <Recommended />
    </div>
  );
};

export default Others;

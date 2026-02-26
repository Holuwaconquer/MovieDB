import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className=" mt-5 flex justify-evenly text-white ">
        <ul className="navlist inline-flex gap-x-3 items-center ">
          <li>Home</li>

          <li>
            <div className="px-2 border-l border-red-500 flex items-center">
              {" "}
              <input
                type="text"
                placeholder="search"
                className="outline-none border-none w-30"
              />{" "}
              <FaSearch className="text-red-500 " />
            </div>
          </li>
        </ul>
        <ul className="inline-flex gap-x-3 items-center">
          <li>New Releases</li>
          <li>Popular</li>
          <li>Genres</li>
          <li>
            {" "}
            <button className="bg-red-500 px-2 rounded-sm py-1 text-white ">
              Login
            </button>
          </li>
        </ul>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Navbar;

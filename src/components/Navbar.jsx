import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="w-full z-100 fixed top-0 left-0 bg-transparent px-6 pb-3 backdrop-blur-xl ">
      <div className=" mt-5 flex justify-between items-center text-white ">
        <ul className="navlist inline-flex gap-x-3 items-center ">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-white font-black" : "text-black"
            }
          >
            Home{" "}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-white font-black" : "text-black"
            }
          >
            <div className="px-2 border-l border-red-500 flex items-center">
              {" "}
              <input
                type="text"
                placeholder="search"
                className="outline-none border-none w-30"
              />{" "}
              <FaSearch className="text-white " />
            </div>
          </NavLink>
        </ul>
        <ul className="hidden md:inline-flex gap-x-3 items-center">
          <NavLink
            to={"#"}
            className={({ isActive }) =>
              isActive ? "text-white font-black" : "text-black"
            }
          >
            New Releases
          </NavLink>
          <NavLink
            to={"#"}
            className={({ isActive }) =>
              isActive ? "text-white font-black" : "text-black"
            }
          >
            Popular
          </NavLink>
          <NavLink
            to={"#"}
            className={({ isActive }) =>
              isActive ? "text-white font-black" : "text-black"
            }
          >
            Genres
          </NavLink>
          <NavLink
            to={"#"}
            className={({ isActive }) =>
              isActive ? "text-red-500 font-black" : "text-black"
            }
          >
            {" "}
            <button className="bg-red-500 px-2 rounded-sm py-1 text-white ">
              Login
            </button>
          </NavLink>
        </ul>
        <button
          className="md:hidden text-white active:text-red-500 text-xl"
          onClick={() => setopen(!open)}
        >
          <FaBars />
        </button>
      </div>
      {open && (
        
        <div className="md:hidden mt-3 bg-white shadow-lg rounded p-4 overflow-hidden">
          <ul className="flex flex-col gap-y-3 text-black">
            <NavLink
              className={
                " text-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 box-border "
              }
              to="#"
            >
              New Releases
            </NavLink>
            <NavLink
              className={
                "text-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 box-border "
              }
              to="#"
            >
              Popular
            </NavLink>
            <NavLink
              className={
                " text-center hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300 box-border "
              }
              to="#"
            >
              Genres
            </NavLink>
            <button className="bg-red-500 px-2 rounded-sm py-1 text-white">
              Login
            </button>
          </ul>
        </div>
      )}
      <div className=""></div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import { AiOutlineMenu, AiFillHome, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [log, setLog] = useState(false);
  const { dispatch } = useAuthContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchposts = async () => {
      //  check if localstore has a value
      if (localStorage.getItem("user")) {
        setLog(true);
        console.log("It's " + user.user.name);
      }
      if (localStorage.getItem("user") === null) {
        setLog(false);
        console.log("It's new user");
      }
    };
    fetchposts();
  }, []);

  // Function to remove user token from local storage
  const handleClick = () => {
    localStorage.removeItem("user");
    // dispatch logOut
    dispatch({ type: "LOGOUT" });
    setLog(false);
  };

  return (
    <div className="sticky top-0 bg-gray-100 z-10">
      <div className="max-w-[1640px] mx-auto flex   justify-between items-center pb-3">
        {/* Left side */}
        <div className="flex  items-center justify-start gap-5 p-2">
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
          >
            <AiOutlineMenu size={30} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl p-3 ">
            <span className="font-bold text-[#007456]">
              <NavLink to="/">JOBIFY</NavLink>
            </span>
          </h1>
        </div>
    <div className="flex   justify-between items-center ">
        <ul className="hidden md:flex flex-row p-4 text-gray-800 gap-6 ">
          <li className="text-lg py-4 flex justify-between hover:text-[#007456]">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="text-lg py-4 flex justify-between hover:text-[#007456]">
            <NavLink to={"/jobs"}>Jobs</NavLink>
          </li>

          <li className="text-lg py-4 flex justify-between hover:text-[#007456]">
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li className="text-lg py-4 flex justify-between hover:text-[#007456]">
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
          {user && user.user.name === "aymane" &&(
          <li className="text-lg py-4 flex justify-between hover:text-[#007456]">
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          )}
        </ul>
        {/* Cart button */}
        {!user && (
          <div className="mr-7 flex flex-row gap-2 md:gap-1">
            <button className=" text-[#007456] hidden md:flex items-center py-2 rounded-full">
              <NavLink to={"/signup"}>Sign up</NavLink>
            </button>
            <button
              className={
                log
                  ? "hidden"
                  : "bg-[#007456] text-bold text-white hidden md:flex items-center py-2 rounded-full"
              }
            >
              <NavLink to={"/signin"}>Sign in</NavLink>
            </button>
          </div>
        )}
        {user && (
          <div className="mr-7 flex flex-row items-center gap-2 md:gap-1">
            <p className="text-black px-5 ">{user.user.name}</p>
            <button
              className={
                !log
                  ? "hidden"
                  : "bg-[#007456] text-bold text-white hidden md:flex items-center py-2 rounded-full"
              }
              onClick={() => handleClick()}
            >
              Logout
            </button>
          </div>
        )}
</div>
        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            <span className="font-bold text-[#007456]">
              <NavLink to="/">JOBIFY</NavLink>
            </span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex">
                <AiFillHome size={25} className="mr-4" />
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-xl py-4 flex">
                <BsFillBriefcaseFill size={25} className="mr-4" />
                <NavLink to={"/jobs"}>Jobs</NavLink>
              </li>

              <li className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" />
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="text-xl py-4 flex">
                <AiFillTag size={25} className="mr-4" />
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
              {!user && (
                <div className="flex flex-col gap-2 mt-[12rem] md:gap-1">
                  <button className=" text-[#007456] md:hidden  items-center py-2 rounded-full">
                    <NavLink to={"/signup"}>Sign up</NavLink>
                  </button>
                  <button className="bg-[#007456] text-bold text-white md:hidden  items-center py-1 rounded-full">
                    <NavLink to={"/signin"}>Sign in</NavLink>
                  </button>
                </div>
              )}

              {user && (
                <div className="flex md:hidden flex-col mt-[15rem] justify-end items-end gap-5">
                  <button
                    className="bg-[#007456] flex text-bold text-white  items-center py-2 rounded-full hover:cursor-pointer"
                    onClick={() => handleClick()}
                  >
                    logout
                  </button>
                </div>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

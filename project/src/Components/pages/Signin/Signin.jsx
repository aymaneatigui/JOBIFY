import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import Navbar from "../../Navbar";
// import framer-motion
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Signin() {
  const { Login, isLoading, error } = useLogin();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(email, pwd);
     navigate("/");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, delay: 1.2 }}
      className="signup z-20 relative"
    >
      <div>
        {/* <h1 className="text-7xl text-center pt-10 mb-[-1rem] text-gray-100">
          <NavLink to={"/"}>Jobify</NavLink>
        </h1> */}

        <Navbar />


        <div className=" h-screen flex items-center justify-center ">
          <form
            className="lg:w-2/5 w-4/5 bg-white rounded-lg p-5"
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-center text-2xl">Sign In</h1>
              <h1 className="text-center text-2xl">{error}</h1>
              <div class="mb-6 text-start">
                <label
                  for="emailll"
                  class="block mb-2 text-sm font-medium  text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="emaill"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  class="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg  w-full p-2.5"
                  placeholder="name@Jobify.com"
                  required
                />
              </div>
              <div class="mb-6 text-start">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  class="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none text-sm rounded-lg  w-full p-2.5"
                  placeholder="Your Password"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center">
                <div className="flex justify-start p-5">
                  <p className="text-[#007456]">
                    <NavLink to={"/signup"}>Don't have an account?</NavLink>
                  </p>
                </div>
                <div className="flex justify-end p-5 ">
                  <button
                    type="submit"
                    disabled={isLoading}
                    class="text-white  hover:bg-[#007452] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#007456]"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

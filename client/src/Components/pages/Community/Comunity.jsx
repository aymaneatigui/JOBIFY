import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../../Footer";
import Navbar from "../../Navbar";

export default function Comunity() {
  const { companie } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [years, setYrs] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // const validate = () => {
  //   if (
  //     name === "" ||
  //     email === "" ||
  //     message === "" ||
  //     number === "" ||
  //     years === ""
  //   ) {
  //     setError("Please fill all the fields");
  //     setTimeout(() => {
  //       setError("");
  //     }, 3000);
  //     return false;
  //   } else {
  //     setError("");
  //     return true;
  //   }
  // };
  // form submit function
  const submit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      message === "" ||
      number === "" ||
      years === ""
    ) {
      setError("Please fill all the fields");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      console.log(name + message + email + number + years + companie);
      const data = { name, message, email, number, years, companie };
      const response = await fetch("/applications/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setError("");
      }
      setName("");
      setEmail("");
      setError("");
      setMessage("");
      setNumber("");
      setYrs("");
      navigate("/");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, delay: 1.2 }}
    >
      <Navbar />
      <div class="w-full py-8 md:w-[40%]  mx-auto h-3/5">
        <div class="p-6 border border-gray-300 sm:rounded-md overflow-visible">
          <h1 className="text-2xl py-5">{companie}</h1>
          <h1 className="text-red-600 ease-in duration-100 ">{error}</h1>
          <form onSubmit={submit} className="grid grid-row-2 ">
            <div className="flex flex-row gap-5">
              <label class="block mb-6 text-start">
                <span class="text-gray-700">Full name</span>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="
            block
            w-64
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
           p-3
           outline-none
          "
                  placeholder="Joe Bloggs"
                />
              </label>
              <label class="block mb-6 text-start">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="
          block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
           p-3
           outline-none
          "
                  placeholder="joe.bloggs@example.com"
                />
              </label>
            </div>
            <div className="flex flex-row gap-5">
              <label class="block mb-6 text-start">
                <span class="text-gray-700">Phone number</span>
                <input
                  name="tel"
                  type="tel"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  class="
          block
          w-64
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
           p-3
           outline-none
          "
                  placeholder="+212.........."
                />
              </label>
              <label class="block mb-6 text-start">
                <span class="text-gray-700">Years of experience</span>
                <select
                  name="experience"
                  value={years}
                  onChange={(e) => setYrs(e.target.value)}
                  class="
          block
          w-52
          mt-1
          border-gray-300
          rounded-md
          shadow-sm
         p-3
         outline-none
          "
                >
                  <option></option>
                  <option>Less than a year</option>
                  <option>1 - 2 years</option>
                  <option>2 - 4 years</option>
                  <option>4 - 7 years</option>
                  <option>7 - 10 years</option>
                  <option>10+ years</option>
                </select>
              </label>
            </div>
            <label class="block mb-6 text-start">
              <span class="text-gray-700">Tell us more about yourself</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                class="
          block
          w-full
          mt-1
          border-gray-300
          rounded-md
          shadow-sm
         p-3
         outline-none
          "
                rows="3"
                placeholder="What motivates you?"
              ></textarea>
            </label>

            <div class="mb-6">
              <button
                type="submit"
                class="
            h-10
            px-5
            text-indigo-100
            bg-[#007456]
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-[#007442]
          "
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

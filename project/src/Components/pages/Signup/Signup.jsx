import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useSignup from "../../../hooks/useSignup";
import Navbar from "../../Navbar";
// import framer-motion
import { motion } from "framer-motion";
export default function Signup() {
  const { signup, Error, isLoading } = useSignup();
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAd] = useState("");
  const [pwd, setPwd] = useState("");
  const [dip, setDip] = useState("");
  const [cpwd, setCPwd] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [gen, setGen] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");
  const navigate = useNavigate();

  const formValidation = (e) => {
    if (
      name === "" ||
      lname === "" ||
      city === "" ||
      email === "" ||
      adresse === "" ||
      pwd === "" ||
      cpwd === "" ||
      age === "" ||
      phone === "" ||
      gen === "" ||
      dip === ""
    ) {
      setError("Please fill in all the fields");
      console.log(city, dip, gen);
      return false;
    } else if (pwd !== cpwd) {
      setError2("Passwords do not match");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const empty = () => {
    setName("");
    setLname("");
    setCity("");
    setEmail("");
    setAd("");
    setCPwd("");
    setAge("");
    setPhone("");
    setGen("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formValidation();
    // check if validate and confirmpwd return true
    if (formValidation() === true) {
      empty();
      const response = await signup(
        name,
        lname,
        age,
        dip,
        email,
        pwd,
        adresse,
        phone,
        gen
      );
      if (response.data.status === 200) {
        setError3("");
        setError4("");
        setError2("");
        setError3("");
        setError4("");
        setError("");
        navigate("/");
      }
    }
  };
  const options = [
    "Casablanca",
    "Rabat",
    "Marakech",
    "Tanger",
    "Chefchaoun",
    "Nador",
    "Kenitra",
    "Agadir",
    "Dakhla",
    "Jadida",
    "Asfe",
    "Fes",
    "Meknes",
    "Ifrane",
    "Titoun",
    "Berkane",
    "Berchid",
    "Oujda",
  ];
  const diploma = ["Bac", "bac+2", "Lisence", "Master", "Doctorat"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, delay: 1.2 }}
      className="signup z-20 relative"
    >
      {/* <h1 className="text-7xl text-center py-10 mb-[-1rem] text-gray-100">
        <NavLink to={"/"}>Jobify</NavLink>
      </h1> */}

      <Navbar />

      <div className=" h-4/5 flex items-center justify-center ">
        <form
          className="lg:w-3/5 w-4/5 bg-white rounded-lg p-5 m-5 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <h1 className="text-center text-2xl">Sign up</h1>
            <h1 className="text-center text-lg text-red-600">{error}</h1>
            <h1 className="text-center text-lg text-red-600">{Error}</h1>
            <h1 className="text-center text-lg text-red-600">{error2}</h1>
            <h1 className="text-center text-lg text-red-600">{error3}</h1>
            <h1 className="text-center text-lg text-red-600">{error4}</h1>
            <div class="mb-6 text-start grid grid-cols-3 ">
              <div className="p-2 ">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Your name"
                />
              </div>
              <div className="p-2 ">
                <label
                  for="text"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name:{" "}
                </label>
                <input
                  type="text"
                  id="lname"
                  onChange={(e) => setLname(e.target.value)}
                  value={lname}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Your last name"
                />
              </div>
              <div className="p-2 ">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {" "}
                  City:
                </label>
                <select
                  id="countries"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                >
                  <option selected>Choose a City</option>
                  {options.map((option) => (
                    <option>{option}</option>
                  ))}
                </select>
              </div>
              <div className="p-2 col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="name@Jobify.com"
                />
              </div>
              <div className="p-2 ">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Adresse:
                </label>
                <input
                  type="text"
                  id="add"
                  onChange={(e) => setAd(e.target.value)}
                  value={adresse}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Your Adresse"
                />
              </div>
              <div className="p-2 col-span-2">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Enter your password"
                />
              </div>
              <div className="p-2 ">
                <label
                  for="Diploma"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Diploma:
                </label>
                <select
                  id="countries"
                  onChange={(e) => setDip(e.target.value)}
                  value={dip}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                >
                  <option selected>Diploma</option>
                  {diploma.map((option) => (
                    <option>{option}</option>
                  ))}
                </select>
              </div>
              <div className="p-2 col-span-2">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm Your Password:
                </label>
                <input
                  type="password"
                  onChange={(e) => setCPwd(e.target.value)}
                  value={cpwd}
                  id="cpassword"
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Confirm..."
                />
              </div>
              <div className="p-2 ">
                <label
                  for="age"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Age:
                </label>
                <input
                  type="number"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  id="age"
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Age"
                />
              </div>
              <div className="p-2 col-span-2 ">
                <label
                  for="number"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone:
                </label>
                <input
                  type="tel"
                  id="age"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                  placeholder="Your Phone"
                />
              </div>
              <div className="p-2 ">
                <label
                  for="country"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  {" "}
                  Gender:
                </label>
                <select
                  id="countries"
                  onChange={(e) => setGen(e.target.value)}
                  value={gen}
                  class="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:outline-none  w-full p-2.5"
                >
                  <option selected>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 items-center">
              <div className="flex justify-start p-5">
                <p className="text-[#007456]">
                  <NavLink to={"/signin"}>already have an account?</NavLink>
                </p>
              </div>
              <div className="flex justify-end items-center p-5 ">
                <button
                  disabled={isLoading}
                  type="submit"
                  class="text-white  hover:bg-[#007452] focus:ring-4  focus:ring-blue-300 font-medium rounded-lg focus:outline-none text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#007456]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

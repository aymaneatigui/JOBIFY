import React, { useEffect, useState } from "react";
import { BsFillBuildingFill } from "react-icons/bs";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";


export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [applications, setApps] = useState([]);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthContext();


  if (user) {
     if(user.user.name !== "aymane"){
        navigate("/");
     }
  }else{
    navigate("/");
  }
  


  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch("/applications")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  //  delete function to do a delete
  const deleteUser = (id) => {
    fetch("/users/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUsers(users.filter((user) => user._id !== id)));
  };
  const deletePost = (id) => {
    fetch("/applications/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUsers(users.filter((user) => user._id !== id)));
    window.location.reload();
  };

  return (
    <div className="">
      <Navbar />
      <h1 className="text-3xl p-4 text-gray-800 gap-6">DASHBOARD</h1>
      <div className="flex flex-row gap-5 p-5 justify-center">
      <p
          className={
            nav === true
            ? "text-gray-800 text-xl py-2 h-10 hover:text-[#007456] cursor-pointer"
            : "text-xl px-8 py-2  h-10 cursor-pointer rounded-full bg-[#007456] text-white" 
          }
          onClick={() => setNav(!nav)}
        >
                    Users

        </p>
        <p
          className={
            nav === false
              ? "text-gray-800 text-xl py-2 h-10 hover:text-[#007456] cursor-pointer"
              : "text-xl px-8 py-2 h-10 cursor-pointer rounded-full bg-[#007456] text-white" 
          }
          onClick={() => setNav(!nav)}
        >
          User Submissions

        </p>
        
      </div>
      <div className="p-5 h-4/5">
        <div
          className={
            nav === false
              ? " grid grid-cols-3 gap-2 items-center content-center justify-center mx-auto  pl-[7.5rem]"
              : "hidden"
          }
        >
          {users.map((elm) => (
            <div class="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow-2xl  max-w-xl mx-auto ">
              <div
                className="flex flex-col justify-center items-start gap-3 font-semibold text-gray-700"
              >

                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  {elm.name} {elm.lname}
                </h5>
              </div>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {elm.email}
              </p>
              {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{elm.password}</p> */}
              <div className="actions flex items-center justify-end mt-4 space-x-4">
                <button
                  onClick={() => deleteUser(elm._id)}
                  class="  rounded-md transition duration-150 ease-in-out text-white  hover:bg-[#007452] font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#007456]"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={
            nav === true
              ? "lg:pr-[5rem] p-5 lg:pl-[16rem] lg:py-20 flex flex-col gap-5 justify-center"
              : "hidden"
          }
        >
          {applications &&
            applications.map((elm) => (
              <div
                key={elm._id}
                className="grid grid-cols-3 gap-6 text-start w-4/5 p-6 bg-white border hover:shadow-lg ease-in duration-150 border-gray-200 rounded-lg shadow start"
              >
                <div href="#" className="col-span-2 pr-20">
                  <h5 class="mb-2  font-bold tracking-tight text-[#007456] uppercase ">
                    {elm.name}
                  </h5>
                  <p class="font-normal text-2xl text-gray-900 ">
                    {elm.message}
                  </p>
                  <h5 class="mt-2 font-bold tracking-tight text-gray-600 ">
                    {elm.email}
                  </h5>
                  <h5 class="mt-2 font-bold tracking-tight text-gray-600 ">
                    {elm.number}
                  </h5>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <button
                    onClick={() => deletePost(elm._id)}
                    className="bg-[#007456] p-3
               text-white px-5  hover:text-gray-600 ease-in duration-100 hover:bg-transparent hover:border hover:border-[#007456]"
                  >
                    Delete
                  </button>
                  <p
                    className="hover:bg-[#007456] p-3 rounded-xl
             hover:text-white px-5 text-gray-600 ease-in duration-100 bg-transparent border hover:border-[#007456] flex gap-2"
                  >
                    <BsFillBuildingFill size={23}></BsFillBuildingFill>
                    {elm.companie}
                  </p>
                </div>
                <div className="flex col-span-2 flex-row gap-4 p-5"></div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

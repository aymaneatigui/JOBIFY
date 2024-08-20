import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BsFolder } from "react-icons/bs";

export default function HeadlineCards() {
  // get all the posts with fetch function on render
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/posts`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className=" bg-transparent">
      <div className="p-10">
        <h1 className="text-start text-5xl">Latest Jobs</h1>
        <div className="pt-20 grid grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
          {posts.slice(0, 6).map((post) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg ease-in-out duration-150 text-start  ">
              <div className="flex justify-evenly items-center">
                <img
                  src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                  className="w-28 rounded-full h-20"
                  alt=""
                />
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                  {post.title}
                </h5>
              </div>
              <div className="flex flex-row py-3 justify-start">
                <p className=" text-[#007456] flex gap-2">
                  <BsFolder size={23}></BsFolder>
                  {post.category}
                </p>
              </div>
              <p className="mb-3 font-normal text-gray-700 ">{post.content}</p>
              <div className="flex justify-end">
                <button className="inline-flex items-center justify-center px-3 py-2 lg:w-[5rem] text-sm font-medium text-center text-white bg-[#007456] rounded-lg hover:bg-[#0a664d] ">
                  <NavLink to={`/community/${post.companie}`}>Apply</NavLink>
                </button>
              </div>
            </div>
          ))}
        </div>
        <NavLink to={"/jobs"} className="">
          <p className="pt-20 text-[#007456] text-xl hover:underline">
            View all jobs
          </p>
        </NavLink>
      </div>
    </div>
  );
}

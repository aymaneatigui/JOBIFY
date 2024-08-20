import React from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import imgs from "../../../images/startup.png";
import imga from "../../../images/aymane.jpg";
import imgm from "../../../images/moaad.jpg";


export default function About() {
  return (
    <div>
      <Navbar />
      

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
              <img
                src={imgs}
                alt="jobify"
              />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Empower Your Job Search with Our Platform
                            </h2>
              <p className="mt-6 text-gray-600">
              Welcome to our website, where we strive to revolutionize the way people find and secure their dream jobs. Our platform is designed to connect job seekers with employers, providing a seamless and efficient experience for both parties. Whether you're actively searching for a new career opportunity or looking to hire talented individuals, we've got you covered. Our comprehensive database, user-friendly interface, and innovative features make us the go-to destination for all your job-related needs. Join us today and take the first step towards a successful and fulfilling professional journey.

              </p>
              <p className="mt-4 text-gray-600">
Explore limitless job possibilities and maximize your potential with our cutting-edge job search platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="container mx-auto px-6 text-center md:px-12">
          <div className="mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Meet Our Talented Development Team
                        </h2>
            <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
            Our development team is the driving force behind our platform's success, combining their technical prowess with a passion for delivering a cutting-edge job search solution.
            </p>
          </div>
          <div className="grid  py-20 md:grid-cols-2 ">

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src={imga}
                  alt="aymane"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div className="space-y-4 text-center">
                <div>
                  <h4 className="text-2xl text-gray-700 dark:text-white">
                    Aymane Atigui
                  </h4>
                </div>
              </div>
            </div>

            <div className="group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
              <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                <img
                  className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                  src={imgm}
                  alt="man"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
              </div>
              <div class="space-y-4 text-center">
                <div>
                  <h4 class="text-2xl text-gray-700 dark:text-white">
                  Mouad Takhdoukhi
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

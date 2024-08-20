import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#007456]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="self-center text-5xl font-semibold whitespace-nowrap text-white">
                  JOBIFY
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm  uppercase text-white">
                  Follow us
                </h2>
                <ul className="ml-6 text-white font-normal">
                  <li className="mb-1">
                    <a
                      href="https://github.com/aymaneatigui/"
                      className="hover:text-gray-200 "
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://www.linkedin.com/in/aymane-atigui/"
                      className="hover:text-gray-200"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/aymane_atigui"
                      className="hover:text-gray-200"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm uppercase text-white">
                  Legal
                </h2>
                <ul className="ml-6  text-white font-medium">
                  <li className="mb-4">
                    <a href="/" className="hover:text-gray-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-gray-200">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-start gap-5">
            <span className="text-sm text-white sm:text-center ">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Jobify™
              </a>
              . All Rights Reserved.
            </span>
            <span className="text-sm text-white sm:text-center flex flex-row gap-5 ">
              <p>
                aymane.atigui.09@gmail.com
              </p>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

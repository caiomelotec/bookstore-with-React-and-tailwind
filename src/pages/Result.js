import React from "react";
import { useContext } from "react";
import { ResultsContext } from "../context/resultcontext";

export const Result = () => {
  const { results } = useContext(ResultsContext);

  return (
    <div className="flex flex-wrap justify-center items-center dark:bg-gray-800 mt-5">
      {/* H1 LOGIC */}
      {results.length > 0 && (
        <h1 className="dark:text-white text-2xl mr-5 font-semibold">
          Results:
        </h1>
      )}

      {/* RESULT COMPONENT LOGIC */}
      <div className="w-full flex flex-col items-center max-sm:w-25 max-sm:ml-20 max-sm:mr-20">
        {results.map((result) => (
          <div
            key={result.id}
            className=" md:justify-center md:items-center w-full max-s:w-1/2  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mt-10"
          >
            <div className="max-w-xs bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
              <a href="google.com">
                <img className="rounded-t-lg mt-3" src={result.img} alt="" />
              </a>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <a href="google.com">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {result.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                  {result.author}
                </p>
                <div className="flex justify-between">
                  <a
                    href="google.com"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    See more
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <p className="dark:text-white text-2xl font-semibold">
                    €{result.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

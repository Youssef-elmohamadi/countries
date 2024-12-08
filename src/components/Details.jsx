import React from "react";
import data from "../data.json";
import { useParams, Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

const Details = () => {
  const { name } = useParams();
  const country = data.find((item) => item.name === name);

  return (
    <div className="container mx-auto px-4">
      {/* Back Button */}
      <div className="flex items-center relative mb-10">
        <FaArrowLeftLong className="absolute left-4 dark:text-white text-black" />
        <Link
          to="/"
          className="text-black py-2 px-4 ps-12 shadow border dark:text-white dark:bg-slate-800 dark:border-none rounded"
        >
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Flag */}
        <div className="lg:w-1/2 w-full">
          <img
            src={country.flag}
            alt={country.name}
            className="w-full rounded-md"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 w-full flex flex-col gap-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-black dark:text-white">
            {country.name}
          </h1>

          {/* Information Sections */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <p className="dark:text-white text-black">
                Native Name:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.nativeName}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Population:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.population}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Region:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.region}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Sub Region:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.subregion}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Capital:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.capital}
                </span>
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2">
              <p className="dark:text-white text-black">
                Top Level Domain:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.topLevelDomain.join(", ")}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Currencies:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p className="dark:text-white text-black">
                Languages:{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {country.languages
                    .map((language) => language.name)
                    .join(", ")}
                </span>
              </p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="dark:text-white text-black font-semibold">
              Border Countries:
            </span>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length > 0
                ? country.borders.map((border) => (
                    <span
                      key={border}
                      className="border border-gray-500 rounded px-2 py-1 dark:text-white dark:bg-slate-800"
                    >
                      {border}
                    </span>
                  ))
                : "No border countries found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

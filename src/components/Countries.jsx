import React from "react";
import data from "../data.json";
import { useFilter } from "./Filter-context";
import { Link } from "react-router";

const Countries = () => {
  const { filter, search } = useFilter();
  const filteredData = data
    .filter((item) =>
      filter ? item.region.toLowerCase() === filter.toLowerCase() : true
    )
    .filter((item) =>
      search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container  mb-10">
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          const { name, population, region, capital, flag } = item;
          return (
            <div
              key={name}
              className="bg-white shadow-md p-5 rounded-lg flex flex-col gap-5 dark:bg-slate-800 dark:text-white"
            >
              <Link to={`/${name}`}>
                <img src={flag} alt={name} className="w-full" />
              </Link>
              <h1 className="font-bold text-lg">{name}</h1>
              <p>
                <span className="text-gray-500 dark:text-gray-300">
                  Population:
                </span>{" "}
                {population}
              </p>
              <p>
                <span className="text-gray-500 dark:text-gray-300">
                  Region:
                </span>{" "}
                {region}
              </p>
              <p>
                <span className="text-gray-500 dark:text-gray-300">
                  Capital:
                </span>{" "}
                {capital}
              </p>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No countries match your search criteria.
        </p>
      )}
    </div>
  );
};

export default Countries;

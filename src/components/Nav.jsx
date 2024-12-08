import React, { useState, useEffect } from "react";
import { CiDark } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useFilter } from "./Filter-context";

const Nav = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { filter, setFilter, search, setSearch } = useFilter();

  function handleFilter(region) {
    setFilter(region);
    setShowFilter(false);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="shadow-md py-4 mb-10 dark:bg-slate-800">
        <div className="container flex justify-between">
          <div>
            <h1 className="capitalize font-bold md:text-lg dark:text-white">
              Where in The World
            </h1>
          </div>
          <div
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex justify-between items-center gap-2 cursor-pointer  dark:text-white"
          >
            <CiDark size={22} className="dark:text-white " />
            <h1 className="capitalize  dark:text-white">Dark Mode</h1>
          </div>
        </div>
      </nav>

      <div className="container flex justify-between flex-wrap gap-y-5 mb-10 ">
        <div className="relative sm:w-72 w-full   ">
          <IoMdSearch
            size={22}
            className="absolute top-3 left-3 dark:text-white"
          />
          <input
            className="border focus:outline-none py-2 ps-12 rounded w-full dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:border-none"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <button className="border py-2 px-5 pe-10 rounded  dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:border-none">
              Filter by Region
            </button>
            <MdOutlineKeyboardArrowDown className="absolute top-3 right-3" />
          </div>
          {showFilter && (
            <div className="absolute top-12 left-0 border w-full py-2 bg-white rounded shadow-md dark:bg-slate-800 dark:border-slate-800 dark:text-white ">
              <ul>
                {["Asia", "Africa", "Americas", "Europe", "Oceania"].map(
                  (region) => (
                    <li
                      key={region}
                      onClick={() => handleFilter(region)}
                      className="px-3 py-1 cursor-pointer hover:bg-gray-100  dark:hover:bg-slate-700"
                    >
                      {region}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;

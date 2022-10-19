import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

const SearchBar = ({ handleInputSearch, handleUnit, unit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    if (searchTerm == "" || searchTerm == " ") {
      return toast.warning("City name required!", { icon: "🚀" });
    }
    handleInputSearch(searchTerm);
    setSearchTerm("");
  };
  const handleUnitChange = () => {
    handleUnit();
  };

  const popularCities = ["Delhi", "Dubai", "Toronto"];

  return (
    <>
      <div className="container max-w-4xl mx-auto text-white flex flex-row justify-between sm:justify-between p-2 md:p-4 bg-black opacity-80 rounded-md items-center">
        <div className="flex space-x-2 md:space-x-4 font-Raleway">
          <input
            type="text"
            placeholder="Enter city name"
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent border-none focus:outline-none rounded-sm md:p-2 text-md md:text-lg focus:border-none capitalize placeholder:text-center text-center shadow-xl"
          />
          <button
            className="p-1 md:p-2 hover:transform hover:scale-110 duration-200"
            onClick={() => handleSearch()}
          >
            <BsSearch size={28} />
          </button>
        </div>

        <div className="flex flex-row space-x-12">
          <div className="hidden md:flex md:items-center flex-row space-x-8 text-gray-200 font-light">
            {popularCities.map((city, index) => {
              return (
                <h1
                  onClick={() => handleInputSearch(city.toLowerCase())}
                  className="hover:cursor-pointer hover:text-sky-500"
                  key={index}
                >
                  {city}
                </h1>
              );
            })}
          </div>
          <button
            className="bg-blue-800 px-6 py-2 text-lg shadow-2xl rounded hover:bg-blue-900 duration-200"
            onClick={() => handleUnitChange()}
          >
            &#176;
            {unit === "metric" ? "F" : "C"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

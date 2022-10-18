import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ handleInputSearch, handleUnit, unit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    if (searchTerm == "") {
      return alert("Inputs cannot be empty!");
    }
    handleInputSearch(searchTerm);
    setSearchTerm("");
  };
  const handleUnitChange = () => {
    handleUnit();
  };

  return (
    <>
      <div className="container max-w-4xl mx-auto text-white flex flex-row justify-evenly sm:justify-between p-2 md:p-4 bg-black opacity-80 rounded-md items-center">
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
        <div className="flex">
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

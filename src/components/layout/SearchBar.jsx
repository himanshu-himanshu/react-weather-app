import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";

const SearchBar = ({ handleInputSearch, handleUnit, unit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  let timeoutId;

  const handleSearch = () => {
    if (searchTerm === "" || searchTerm === " ") {
      return toast.error("Please enter city name!", { icon: "⚠︎" });
    }
    handleInputSearch(searchTerm);
    setSearchTerm("");
  };
  const handleUnitChange = () => {
    handleUnit();
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const regex = /^[a-zA-Z\s]*$/; // Regular expression to match only alphabets and spaces

    clearTimeout(timeoutId); // Clear existing timeout

    if (!regex.test(inputValue)) {
      // If input contains non-alphabetic characters
      timeoutId = setTimeout(() => {
        toast.error("Please enter only alphabets!", { icon: "⚠︎" });
      }, 1000); // Delay for 1000 milliseconds (1 second)
    } else {
      setSearchTerm(inputValue);
    }
  };

  return (
    <>
      <div className="container max-w-4xl mx-auto text-white flex flex-row justify-between sm:justify-between p-2 md:p-4 bg-black opacity-80 rounded-md items-center">
        <div className="flex flex-row justify-between space-x-2 md:space-x-4 font-Raleway w-1/2">
          <input
            type="text"
            placeholder="Enter city name"
            required
            value={searchTerm}
            onChange={handleInputChange}
            className="bg-transparent border-none focus:outline-none rounded-sm md:p-2 text-md md:text-lg focus:border-none capitalize placeholder:text-center text-center shadow-xl w-2/3"
          />
          <button
            className="p-1 md:p-2 hover:transform hover:scale-110 duration-200 w-1/3"
            onClick={() => handleSearch()}
          >
            <BsSearch size={28} />
          </button>
        </div>

        <div className="flex flex-row space-x-12 w-1/2 justify-end">
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

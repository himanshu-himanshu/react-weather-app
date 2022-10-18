import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Spinner() {
  return (
    <div className="text-gray-100 w-full h-[60vh] flex-center">
      <ImSpinner9 className="animate-spin text-5xl" h={50} w={50} />
    </div>
  );
}

export default Spinner;

import React from "react";

function InfoBlock({ title, value }) {
  return (
    <span className="detail-span">
      <p className="text-sm">{title}</p>
      <p className="text-lg sm:text-2xl">{value}</p>
    </span>
  );
}

export default InfoBlock;

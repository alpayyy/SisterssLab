import React from "react";

const Cars = ({ title, text, number }) => {
  return (
    <div className="rounded max-w-sm shadow-lg flex items-center justify-center">
      <div className="px-6 py-4">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-pink-500 text-base">{text}</p>
        <p className="text-blue-300">{number}</p>
      </div>
    </div>
  );
};
export default Cars;

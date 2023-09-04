import React from "react";

const Button = (nextProfile, text) => {
  return (
    <>
      <button className="text-white hover:bg-green-700 bg-green-800 rounded-full text-sm px-3 py-1" 
      onClick={nextProfile}>
        Contact
      </button>
    </>
  );
};

export default Button;

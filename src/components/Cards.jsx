import React from "react";
import Button from "./Button";

const Cards = (props) => {
  const { img, names, email, state } = props;
  return (
    // <div className="lg:w-80%">
      <div className="flex flex-col md:w-[40%] lg:w-[27%] w-[90%]  h-[19rem] items-center gap-5 shadow-md border-2 py-4  hover:scale-105 transition">
        <img
          src={img}
          alt=""
          className="w-[120px] h-[120px] object-cover rounded-full"
        />
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-bold text-2xl">{names}</h2>
          <h5 className="font-bold text-md text-red-900">{email}</h5>
          <p>{state}</p>
          <Button />
        </div>
      </div>
    // </div>
  );
};

export default Cards;

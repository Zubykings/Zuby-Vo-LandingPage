import React from "react";
import Button from "./Button";

const Cards = (props) => {
  const { img, names, email, state } = props;
  return (
    <div className="hover:scale-105 transition">
      <div className="flex flex-col md:w-[15rem] w-[90%]  h-[19rem] items-center gap-5 shadow-md border-2 py-4  ">
        <img
          src={img}
          alt=""
          className="w-[120px] h-[120px] object-cover rounded-full"
        />
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-bold text-2xl">{names}</h2>
          <h5 className="font-bold text-md">{email}</h5>
          <p>{state}</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Cards;

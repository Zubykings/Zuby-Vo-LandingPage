import React from "react";
import Button from "./Button";

const SubCards = (props) => {
  const { img, names, email, state } = props;
  return (
    <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[19rem] h-[25rem] items-center gap-5 shadow-md border-2 py-4 hover:scale-105 transition">
      <img
        src={img}
        alt=""
        className="w-[200px] h-[200px] object-cover rounded-full"
      />
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-bold text-2xl">{names}</h2>
        <h5 className="font-bold text-md">{email}</h5>
        <p>{state}</p>
        <Button />
      </div>
    </div>
  );
};

export default SubCards;

import React from "react";
import { maleUsers } from "../../assets/users";
import SubCards from "../SubCards";

const Male = () => {
  return (
    <div className="flex flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full">
      {maleUsers.map((male) => (
        <SubCards
          key={male.id}
          img={male.img}
          names={male.names}
          email={male.email}
          state={male.state}
        />
      ))}
    </div>
  );
};

export default Male;
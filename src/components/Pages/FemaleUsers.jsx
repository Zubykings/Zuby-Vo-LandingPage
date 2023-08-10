import React from "react";
import SubCards from "../SubCards";
import { femaleUsers } from "../../assets/users";

const FemaleUsers = () => {
  return (
    <div className="flex flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full">
      {femaleUsers.map((female) => (
        <SubCards
          key={female.id}
          img={female.img}
          names={female.names}
          email={female.email}
          state={female.state}
        />
      ))}
    </div>
  );
};

export default FemaleUsers;

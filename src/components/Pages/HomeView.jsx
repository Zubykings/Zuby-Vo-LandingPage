import React, { useState } from "react";
import { allUsers } from "../../assets/allUsers";
import Cards from "../Cards";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "../Button";
// import { allUsers } from "../assets/allUsers";

const HomeView = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [displayedUser, setDisplayedUser] = useState(allUsers);
  const [profileIndex, setProfileIndex] = useState(0);

  const next = () => {
    if (profileIndex < displayedUser.length - 1) {
      setProfileIndex(profileIndex + 1);
    }
  };
  const previous = () => {
    if (profileIndex > 0) {
      setProfileIndex(profileIndex - 1);
    }
  };

  const maleUsers = allUsers.filter((user) => user.gender == "male");
  const femaleUsers = allUsers.filter((user) => user.gender == "female");

  const handlePageChange = (page) => {
    setCurrentPage(page);

    if (page === "home") {
      setDisplayedUser(allUsers);
    } else if (page === "male") {
      setDisplayedUser(maleUsers);
    } else if (page === "female") {
      setDisplayedUser(femaleUsers);
    }
    setProfileIndex(0);
  };

  const navLinks = [
    {
      label: "All",
      icon: <FaUsers />,
      onMouseOver: () => handlePageChange("home"),
    },
    {
      label: "Male Folks",
      icon: <FaUserTie />,
      onMouseOver: () => handlePageChange("male"),
    },
    {
      label: "Female Folks",
      icon: <SlUserFemale />,
      onMouseOver: () => handlePageChange("female"),
    },
  ];

  const profile = displayedUser[profileIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full ">
      <div className="md:w-[20%] h-full bg-[#ad9f9e] fixed top-0 left-0 px-5 ">
        <div className="text-red-900 border-b-2 text-center border-gray-500/30 w-[90%] m-auto">
          <h2 className="vo mt-4  text-4xl  md:text-7xl">VO</h2>
        </div>

        <nav className="w-full flex items-center justify-center">
          <ul className="flex flex-col pt-10 gap-5 text-gray-800 font-[500]">
            {navLinks.map((link, index) => (
              <a
                href="#!"
                onMouseOver={link.onMouseOver}
                key={index}
                className="hover:text-red-900 transition-colors flex items-center gap-5"
              >
                {" "}
                <span className="text-2xl text-red-900">{link.icon}</span>
                <li className="hidden md:flex basis">{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center w-full h-full gap-10">
        <div className="flex flex-row flex-nowrap gap-3 items-center ">
          <i onClick={previous}>
            <GrPrevious className="text-2xl cursor-pointer" />
          </i>

          <div className="flex flex-col items-center border p-5 rounded-3xl shadow-2xl">
            <img
              src={profile.img}
              alt=""
              className="w-[250px] h-[250px] object-cover rounded-3xl"
            />
            <h1 className="font-bold text-xl">{profile.names}</h1>
            <p className="font-semibold text-red-900">{profile.email}</p>
            <p>{profile.state}</p>
          </div>

          <i onClick={next} className="">
            <GrNext className="text-2xl text-red-900 cursor-pointer" />
          </i>
        </div>
        <div className="flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full">
          {displayedUser.map((user) => (
            <Cards
              key={user.id}
              img={user.img}
              names={user.names}
              email={user.email}
              state={user.state}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;

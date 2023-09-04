import React, { useState } from "react";
import { allUsers } from "../../assets/allUsers";
import Cards from "../Cards";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { SlLogin, SlUserFemale } from "react-icons/sl";
import { GrNext, GrPrevious } from "react-icons/gr";
import SignUp from "../SignUp";

const HomeView = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [displayedUser, setDisplayedUser] = useState(allUsers);
  const [profileIndex, setProfileIndex] = useState(0);
  const [showSignUp, setShowSignUp] = useState(false);

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
  console.log("Current Page:", currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // setShowSignUp()

    if (page === "home") {
      setDisplayedUser(allUsers);
    } else if (page === "male") {
      setDisplayedUser(maleUsers);
    } else if (page === "female") {
      setDisplayedUser(femaleUsers);
    } else if (page === "signUp") {
      setShowSignUp(true);
      console.log("set to true");
    } else {
      setShowSignUp(false);
      console.log("set to false", showSignUp);
    }
    setProfileIndex(0);
    console.log(page);
  };

  const openSignUpModal = () => {
    if (showSignUp === false) {
      handlePageChange("signUp");
    } else {
      handlePageChange(showSignUp);
    }
  };

  const navLinks = [
    {
      label: "All",
      icon: <FaUsers />,
      onClick: () => handlePageChange("home"),
      style2: "hover:bg-slate-600",

    },
    {
      label: "Male Folks",
      icon: <FaUserTie />,
      onClick: () => handlePageChange("male"),
      style2: "hover:bg-slate-600",

    },
    {
      label: "Female Folks",
      icon: <SlUserFemale />,
      onClick: () => handlePageChange("female"),
      style2: "hover:bg-slate-600",

    },
    {
      label: "Sign Up",
      icon: <SlLogin />,
      onClick: openSignUpModal,
      style:
        " py-1 px-1 rounded-lg bg-green-500 font-bold hover:bg-green-400 group hover:text-white text-white",
    },
  ];

  const profile = displayedUser[profileIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full bg-[#EAE9E5] ">
      <div className="md:w-[20%] h-full bg-slate-700 fixed top-0 left-0 px-5 z-50 ">
        <div className="text-white border-b-2 text-center border-gray-200/100 w-[90%] m-auto">
          <h2 className="vo mt-4  text-4xl  md:text-7xl">ZK</h2>
        </div>

        <nav className="w-full flex items-center justify-center">
          <ul className="flex flex-col pt-10 gap-5 text-white font-[500] ">
            {navLinks.map((link, index) => (
              <a
                href="#"
                onClick={link.onClick}
                key={index}
                className={` py-1.5 px-2 rounded-lg transition-colors flex items-center gap-5 ${link.style2} ${link.style}`}
              >
                <span className={`text-2xl  text-white`}>
                  {link.icon}
                </span>
                <li className="hidden md:flex basis">{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={
          showSignUp
            ? "flex flex-col items-center justify-center w-full h-full justify-center"
            : "flex flex-col items-center w-full h-full relative justify-center"
        }
      >
        {showSignUp ? (
          <div className="modal z-50 w-full flex flex-col  h-full items-center justify-center m-auto  ">
            <div className="modal-content w-full md:w-4/6 h-full m-auto ">
              <SignUp />
            </div>
          </div>
        ) : null}
        <div className={showSignUp ? "hidden" : ""}>
          <div className="fixed top-0 z-20 left-[10%] w-full left-0 right-0 md:pb-5 bg-[#EAE9E5]  top-card">
            <div className="flex md:flex-row flex-nowrap gap-3 items-center justify-center profile-container">
              <button onClick={previous} className="icon prev px-2">
                <GrPrevious className="md:text-2xl text-4xl cursor-pointer" />
              </button>

              <div className="flex flex-col items-center border p-5 rounded-3xl shadow-2xl card">
                <p className="font-bold">
                  Student ID:
                  <span className="font-normal">
                    {` 00${profileIndex + 1} of 00${displayedUser.length}`}
                  </span>
                </p>
                <img
                  src={profile.img}
                  alt=""
                  className="w-[250px] h-[250px] object-cover rounded-3xl"
                />
                <h1 className="font-bold text-xl">{profile.names}</h1>
                <p className="font-semibold text-green-900">{profile.email}</p>
                <p>{profile.state}</p>
              </div>

              <button onClick={next} className="icon next px-2 ">
                <GrNext className="md:text-2xl text-4xl cursor-pointer" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            showSignUp
              ? `flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full absolute blur-sm`
              : `flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full absolute ${
                  displayedUser === allUsers
                    ? "md:top-[470px] top-[450px]"
                    : "md:top-[300px] top-[350px]"
                }`
          }
        >
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

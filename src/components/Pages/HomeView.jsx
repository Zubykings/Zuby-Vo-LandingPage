import React, { useState } from "react";
import { allUsers } from "../../assets/allUsers";
import Cards from "../Cards";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { SlLogin, SlUserFemale } from "react-icons/sl";
import { GrNext, GrPrevious } from "react-icons/gr";
import SignUp from "../SignUp";
// import Button from "../Button";
// import { allUsers } from "../assets/allUsers";

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
    handlePageChange("signUp");
  };

  const navLinks = [
    {
      label: "All",
      icon: <FaUsers />,
      onClick: () => handlePageChange("home"),
    },
    {
      label: "Male Folks",
      icon: <FaUserTie />,
      onClick: () => handlePageChange("male"),
    },
    {
      label: "Female Folks",
      icon: <SlUserFemale />,
      onClick: () => handlePageChange("female"),
    },
    {
      label: "Sign Up",
      icon: <SlLogin />,
      onClick: openSignUpModal,
      style:" py-1 px-1 rounded-lg bg-red-900 hover:bg-red-800 hover:text-white text-white" ,
    },
  ];

  const profile = displayedUser[profileIndex];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full ">
      <div className="md:w-[20%] h-full bg-[#ad9f9e] fixed top-0 left-0 px-5 z-50 ">
        <div className="text-red-900 border-b-2 text-center border-gray-500/30 w-[90%] m-auto">
          <h2 className="vo mt-4  text-4xl  md:text-7xl">VO</h2>
        </div>

        <nav className="w-full flex items-center justify-center">
          <ul className="flex flex-col pt-10 gap-5 text-gray-800 font-[500]">
            {navLinks.map((link, index) => (
              <a
                href="#!"
                onClick={link.onClick}
                key={index}
                className={`hover:text-red-900 transition-colors flex items-center gap-5 ${link.style}`}
              >
                
                <span className={`text-2xl ${link.style} text-red-900`}>{link.icon}</span>
                <li className="hidden md:flex basis">{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={
          showSignUp
            ? "flex flex-col items-center w-full h-full relative border justify-center"
            : "flex flex-col items-center w-full h-full relative border justify-center"
        }
      >
        {showSignUp ? (
          <div className="modal z-50 h-full lg:w-[80%] w-full fixed  top-[10%] -right-[10%] ">
            <div className="modal-content h-full ">
              <SignUp />
            </div>
          </div>
        ) : null}
        <div className={showSignUp ? "blur" : ""}>
          <div className="fixed md:sticky lg:fixed top-0 z-20 left-[10%] bg-white w-full left-0 right-0 md:pb-5 top-card">
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
                <p className="font-semibold text-red-900">{profile.email}</p>
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
              ? `flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full absolute blur-sm ${
                  displayedUser === allUsers
                    ? "md:top-[470px] top-[450px]"
                    : "md:top-[300px] top-[350px]"
                }`
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

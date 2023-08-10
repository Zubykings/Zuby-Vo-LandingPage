import { useState } from "react";
import { FaMale, FaFemale, FaUsers } from 'react-icons/fa';
import "./App.css";
import Male from "./components/Pages/Male";
import FemaleUsers from "./components/Pages/FemaleUsers";
import HomeView from "./components/Pages/HomeView";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navLinks = [
    { label: "All",  icon: <FaUsers />, onClick: () => handlePageChange("home") },
    { label: "Male Folks", icon: <FaMale />, onClick: () => handlePageChange("male") },
    { label: "Female Folks", icon: <FaFemale />, onClick: () => handlePageChange("female") },
  ];

  return (
    <div className="flex flex-row items-center justify-center relative w-full h-[100vh]">
      <div className="w-[20%] h-full bg-[#ad9f9e] fixed top-0 left-0 ">
        <div className="text-red-900 border-b-2 border-gray-500/30 w-[90%] m-auto">
          <h2 className="vo pt-4 md:px-5 px-3 md:ms-5 text-5xl  md:text-7xl">VO</h2>
        </div>

        <nav className="w-full flex items-center justify-center">
          <ul className="flex flex-col pt-10 gap-4 text-gray-800 font-[500]">
            {navLinks.map((link, index) => (
              <a
                href="#!"
                onClick={link.onClick}
                key={index}
                className="hover:text-red-900 transition-colors flex items-center gap-5"
              > <span className="text-2xl text-red-900">
                 {link.icon} 
              </span>
                <li className="hidden md:flex">{link.label}</li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="  w-[80%] m-auto top-0 h-full absolute right-0">
        {currentPage === "home" && <HomeView />}
        {currentPage === "male" && <Male />}
        {currentPage === "female" && <FemaleUsers />}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

// import Male from "./components/Pages/Male";
// import FemaleUsers from "./components/Pages/FemaleUsers";
import HomeView from "./components/Pages/HomeView";

function App() {
  return (
    <div className="flex flex-row items-center justify-center relative w-full h-[100vh]">
      <div className="  w-[80%] m-auto top-2 h-full absolute right-0">
        <HomeView />
      </div>
    </div>
  );
}

export default App;

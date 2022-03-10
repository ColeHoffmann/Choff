import { useState } from "react";
import About from "./Intro";
import Projects from "./Projects";
import Fade from "./Fade";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#7f1d1d"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[10vw] bg-gray-800  p-5 pl-10 text-red-600 fixed h-full z-40  ease-in-out duration-700 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <Fade>
          <div className="text-left mt-20 text-xl  text-white">
            <p>
              <a className="text-gray-300 hover:text-gray-100" href="#bio">
                /bio
              </a>
            </p>

            <p>
              <a className="text-gray-300 hover:text-gray-100" href="#projects">
                /projects
              </a>
            </p>
            <p>
              <a className="text-gray-300 hover:text-gray-100" href="contact">
                /contact
              </a>
            </p>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Sidebar;

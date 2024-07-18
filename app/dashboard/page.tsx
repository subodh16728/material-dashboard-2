import React from "react";
import {
  faBars,
  faBell,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyMetrics } from "@/components";

const Dashboard = () => {
  return (
    <>
      <div className="container px-7 pt-9">
        <header className="w-full px-3.5 mb-5">
          <div className="header-wrapper flex flex-col space-y-3">
            <div className="navbar-header-container flex flex-col">
              <nav className="navbar">
                <ol className="flex space-x-2">
                  <li className="">
                    <a href="/dashboard">
                      <FontAwesomeIcon
                        icon={faHouse}
                        size="xs"
                        style={{ color: "#b1b4b9" }}
                      />
                    </a>
                  </li>
                  <li className="text-slate-500">/</li>
                  <li className="text-sm mt-0.5">Dashboard</li>
                </ol>
              </nav>
              <h6 className="font-semibold">Dashboard</h6>
            </div>
            <div className="search-icons-container flex">
              <div className="search h-10 relative">
                <input
                  type="text"
                  id="floating_outlined"
                  className=" w-46 block px-2.5 py-2.5 text-sm text-gray-900 bg-transparent rounded-md border focus:border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] peer-focus:bg-slate-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Search here
                </label>
              </div>
              <div className="icons flex w-36 space-x-5 items-center justify-center ml-auto">
                <a href="/dashboard">
                  <FontAwesomeIcon icon={faUser} style={{ color: "#85888d" }} />
                </a>
                <FontAwesomeIcon icon={faBars} style={{ color: "#85888d" }} />
                <FontAwesomeIcon icon={faGear} style={{ color: "#85888d" }} />
                <FontAwesomeIcon icon={faBell} style={{ color: "#85888d" }} />
              </div>
            </div>
          </div>
        </header>
        <KeyMetrics />
      </div>
    </>
  );
};

export default Dashboard;

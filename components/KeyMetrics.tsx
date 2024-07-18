import {
  faChartLine,
  faChartSimple,
  faCouch,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const keyMetrics = () => {
  return (
    <section className="key-metrics-section mt-10">
      <div className="section-wrapper w-full flex flex-col space-y-10">
        <div className="metrics-booking w-full rounded-xl shadow-lg h-34 bg-white flex flex-col">
          <div className="first-main-container flex">
            <div className="icons  relative">
              <div className="icon-box bg-bookings h-16 w-16 rounded-xl flex justify-center items-center absolute bottom-4 left-4 shadow-bookings">
                <FontAwesomeIcon
                  icon={faCouch}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </div>
            </div>
            <div className="total-bookings ml-auto mt-3 mr-4">
              <p className="font-light text-sm text-slate-400">Bookings</p>
              <p className="font-bold text-2xl flex justify-end text-[rgb(52, 71, 103)]">
                281
              </p>
            </div>
          </div>
          <div className="h-8 flex flex-col justify-center">
            <hr className="flex-shrink-0 border-t-[0px_solid_rgba(0,_0,_0,_0.12)] border-r-[0px_solid_rgba(0,_0,_0,_0.12)] border-l-[0px_solid_rgba(0,_0,_0,_0.12)] bg-transparent h-[0.0625rem] mx-0 my-4 border-b-[none] opacity-25 !bg-[linear-gradient(to_right,_rgba(52,_71,_103,_0),_rgba(52,_71,_103,_0.4),_rgba(52,_71,_103,_0))]" />
          </div>
          <div className="ml-5 h-full">
            <p className="font-light text-sm text-slate-400">
              <span className="text-green-600 text-[0.825rem] font-bold">
                +55% &nbsp;
              </span>
              than last week
            </p>
          </div>
        </div>
        <div className="metrics-users w-full rounded-xl shadow-lg h-34 bg-white flex flex-col">
          <div className="second-main-container flex">
            <div className="icons  relative">
              <div className="icon-box bg-users h-16 w-16 rounded-xl flex justify-center items-center absolute bottom-4 left-4 shadow-users">
                <FontAwesomeIcon
                  icon={faChartSimple}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </div>
            </div>
            <div className="total-users ml-auto mt-3 mr-4">
              <p className="font-light text-sm text-slate-400">Today's Users</p>
              <p className="font-bold text-2xl flex justify-end text-[rgb(52, 71, 103)]">
                2,300
              </p>
            </div>
          </div>
          <div className="h-8 flex flex-col justify-center">
            <hr className="flex-shrink-0 border-t-[0px_solid_rgba(0,_0,_0,_0.12)] border-r-[0px_solid_rgba(0,_0,_0,_0.12)] border-l-[0px_solid_rgba(0,_0,_0,_0.12)] bg-transparent h-[0.0625rem] mx-0 my-4 border-b-[none] opacity-25 !bg-[linear-gradient(to_right,_rgba(52,_71,_103,_0),_rgba(52,_71,_103,_0.4),_rgba(52,_71,_103,_0))]" />
          </div>
          <div className="ml-5 h-full">
            <p className="font-light text-sm text-slate-400">
              <span className="text-green-600 text-[0.825rem] font-bold">
                +3% &nbsp;
              </span>
              than last month
            </p>
          </div>
        </div>
        <div className="metrics-revenues w-full rounded-xl shadow-lg h-34 bg-white flex flex-col">
          <div className="third-main-container flex">
            <div className="icons relative">
              <div className="icon-box bg-revenues h-16 w-16 rounded-xl flex justify-center items-center absolute bottom-4 left-4 shadow-revenues">
                <FontAwesomeIcon
                  icon={faChartLine}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </div>
            </div>
            <div className="total-revenues ml-auto mt-3 mr-4">
              <p className="font-light text-sm text-slate-400">Revenue</p>
              <p className="font-bold text-2xl flex justify-end text-[rgb(52, 71, 103)]">
                34k
              </p>
            </div>
          </div>
          <div className="h-8 flex flex-col justify-center">
            <hr className="flex-shrink-0 border-t-[0px_solid_rgba(0,_0,_0,_0.12)] border-r-[0px_solid_rgba(0,_0,_0,_0.12)] border-l-[0px_solid_rgba(0,_0,_0,_0.12)] bg-transparent h-[0.0625rem] mx-0 my-4 border-b-[none] opacity-25 !bg-[linear-gradient(to_right,_rgba(52,_71,_103,_0),_rgba(52,_71,_103,_0.4),_rgba(52,_71,_103,_0))]" />
          </div>
          <div className="ml-5 h-full">
            <p className="font-light text-sm text-slate-400">
              <span className="text-green-600 text-[0.825rem] font-bold">
                +1% &nbsp;
              </span>
              than yesterday
            </p>
          </div>
        </div>
        <div className="metrics-followers w-full rounded-xl shadow-lg h-34 bg-white flex flex-col">
          <div className="first-main-container flex">
            <div className="icons relative">
              <div className="icon-box bg-followers h-16 w-16 rounded-xl flex justify-center items-center absolute bottom-4 left-4 shadow-followers">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </div>
            </div>
            <div className="total-followers ml-auto mt-3 mr-4">
              <p className="font-light text-sm text-slate-400">Followers</p>
              <p className="font-bold text-2xl flex justify-end text-[rgb(52, 71, 103)]">
                +91
              </p>
            </div>
          </div>
          <div className="h-8 flex flex-col justify-center">
            <hr className="flex-shrink-0 border-t-[0px_solid_rgba(0,_0,_0,_0.12)] border-r-[0px_solid_rgba(0,_0,_0,_0.12)] border-l-[0px_solid_rgba(0,_0,_0,_0.12)] bg-transparent h-[0.0625rem] mx-0 my-4 border-b-[none] opacity-25 !bg-[linear-gradient(to_right,_rgba(52,_71,_103,_0),_rgba(52,_71,_103,_0.4),_rgba(52,_71,_103,_0))]" />
          </div>
          <div className="ml-5 h-full">
            <p className="font-light text-sm text-slate-400">Just updated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default keyMetrics;

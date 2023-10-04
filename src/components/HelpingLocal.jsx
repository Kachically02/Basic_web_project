import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

function HelpingLocal() {
  return (
    <div className="bg-[#f5F5F5] ">
      <div className="w-10/12 m-auto py-8 grid md:grid-cols-2">
        <div className="">
          <h1 className="text-4xl font-bold">
            Helping a local <br/>
            <span className=" text-green-500">business reinvent itself</span>{" "}
          </h1>
          <p className="py-4">We reached here with our hard work and dedication</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <img src={icon1} alt="" className="w-8 mr-4" />
            <div className="">
              <hi className="text-2xl font-bold">2,245,341</hi>
              <p> Member</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={icon2} alt="" className="w-8 mr-4" />
            <div className="">
              <hi className="text-2xl font-bold">46,328</hi>
              <p> Clubs</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={icon3} alt="" className="w-8 mr-4" />
            <div className="">
              <hi className="text-2xl font-bold">828,867</hi>
              <p> Event Bookings</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src={icon4} alt="" className="w-8 mr-4" />
            <div className="">
              <hi className="text-2xl font-bold">1,926,436</hi>
              <p> Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpingLocal;

import React from "react";
import HomeImage from "../assets/homepageimage.svg";

function Homepage() {
  return (
    <div className="bg-[#F5F7FA] md:py-16 lg:py-32 xl:py-64 mt-4 lg-[calc(100vh-3.5rem)]">
      <div className="w-10/12 m-auto md:flex justify-between">
        <div className="text">
        <h1 className="md:text-4xl lg:text-6xl font-bold"> Lessons and insights <span className="text-green-500">from 8 years</span></h1>
        <p className="my-8"> 
        Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-green-500 text-white rounded p-4">Register</button>
        </div>
        <div className="image p-4">
          <img src={HomeImage} alt="homepage" className="w-[500px] h-500" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import mobilelock_logo from "../assets/mobilelock.svg";

function About() {
  return (
    <div className="bg-white w-10/2 grid sm:grid-cols-1 md:grid-cols-2 py-8 m-auto">
      <div className=" ">
        <img src={mobilelock_logo} alt="" className="w-full" />
      </div>
      <div className="mx-8 my-8">
        <h1 className="text-5xl font-bold">How to design your site footer like we did</h1>
        <p className=" text-1xl py-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;

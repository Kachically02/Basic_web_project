import React from "react";
import { company_brands } from "./LocalDatabase";
import team from "../assets/teamlogo.svg";
import memeberlogo from "../assets/member.svg";
import memberlogo2 from "../assets/member2.svg";
import securitylogo from "../assets/securitylogo.svg";
/*import "./client.css"**/

function OurClient() {
  return (
    <div className="bg-[#fff] w-10/12 m-auto py-10">
      <h1 className="font-bold text-2xl text-center">Our Client</h1>
      <p className="text-lg text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 py-8">
        {company_brands.map((image) => (
          <div className="flex items-center" key={image.id}>
            <img src={image.image} alt="brands" className="w-[100px]" />
          </div>
        ))}
      </div>
      <h1 className="pt-8 text-center font-bold text-xl w-[30%] m-auto">
        {" "}
        Manage your entire community in a single system
      </h1>
      <p className="text-center">Who is Nextcent suitable for?</p>
      <div className="  grid sm:grid-cols-1 md:grid-cols-3 gap-8 py-4">
        <div className="text-center boxshadow p-8 rounded-sm">
          <div className="w-[50%] m-auto">
            <img src={team} alt="" className=" w-10 mx-20" />
          </div>
          <hi className=" text-xl font-bold py-4">Membership Organisations</hi>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="organization text-center boxshadow p-8 rounded-sm">
          <div className="w-[50%] m-auto">
            <img src={memeberlogo} alt="" className="w-10 mx-20" />
          </div>
          <hi className=" text-xl font-bold py-4">National Associationss</hi>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="national text-center boxshadow p-8 rounded-sm">
          <div className="w-[50%] m-auto">
            <img src={memberlogo2} alt="" className="w-10 mx-20" />
          </div>
          <hi className=" text-xl font-bold py-4">Clubs And Groups</hi>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      {/*last div*/}
      <div className="py-8 grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        <div className="image ">
          <img src={securitylogo} alt="" className=" w-full" />
        </div>
        <div className="">
          <h1 className=" font-bold text-2xl py-8">
            The unseen of spending three years at Pixelgrade{" "}
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <button className="text-white bg-green-500 font-bold rounded p-2 my-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurClient;

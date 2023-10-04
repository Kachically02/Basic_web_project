import React from "react";
import { Link } from "react-router-dom";
import brandlogo from "../assets/brandlogo.svg";
import { company_brands } from "./LocalDatabase";
import { FaArrowRight } from "react-icons/fa";
function Brand() {
  return (
    <div className="bg-gray-100 w-10/2 grid sm:grid-cols-1 md:grid-cols-2 py-8">
      <div className="mb-8 mr-4">
        <img src={brandlogo} alt="" className="w-full" />
      </div>
      <div className="mx-8 my-8">
        <p className=" text-1xl py-4">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="text-2xl font-bold text-green-500 px-2 py-2">Tim Smith</p>
        <p className="  px-2 py-2">British Dragon Boat Racing Association</p>
        <div>
          <div className="md:flex  items-center  ">
            <div className="grid md:grid-cols-8 gap-2">
              {company_brands.map((image) => (
                <div className="flex items-center" key={image.id}>
                  <img src={image.image} alt="brands" className="w-[60px]" />
                </div>
              ))}
            </div>
            <div className="flex items-center py-4">
              <Link className="text-green-500 rl-4 md:text-[10px] text-xl">
                Meet All Customers
              </Link>
              <FaArrowRight size={20} className="text-green-500 ml-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;

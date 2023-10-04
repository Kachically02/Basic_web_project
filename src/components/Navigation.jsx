import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigationLinks } from "./LocalDatabase";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navigation() {
  const [open, setOpen] = useState(false);
  const switches = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="h-14 bg-white  relative">
      <div className="flex items-center justify-between py-4 w-10/12 m-auto">
        <div className="logo flex items-center">
          <img src="" alt="" />
          <Link to="/">
            <span className="font-bold text-2xl uppercase">Nexcent</span>
          </Link>
        </div>
        {/* desktop view */}
        <div className="desktop_navigation flex items-center">
          {navigationLinks.map((x) => (
            <ul className="flex items-center" key={x._id}>
              <Link to={`/${x.link}`}>
                <li className="mx-2 text-lg">{x.link}</li>
              </Link>
            </ul>
          ))}
          <Link
            to="/register"
            className=" text-white flex items-center  bg-green-500 rounded ml-8"
          >
            <button className="p-2 ">Register Now</button>
            <FaArrowRight className="mx-2" color="#fff" />
          </Link>
        </div>
      </div>
      <div className="absolute top-8 right-4 md:hidden" onClick={() => {}}>
        {open ? (
          <AiOutlineClose size={25} onClick={() => setOpen(false)} />
        ) : (
          <AiOutlineMenu size={25} onClick={() => setOpen(true)} />
        )}
      </div>
      {open && (
        <div>
          {/*mobile navigation view*/}
          <div className="md:hidden bg-green-300 h-full p-5 ">
            {navigationLinks.map((link) => (
              <ul key={link._id} className="flex flex-col">
                <Link to={`/&{link.link}`}>
                <li onClick={()=>setOpen(false)} className="text-lg text-white bg-green-600 my-2 p-2 rounded cursor-pointer hover:bg-green-900">
                  {link.link}
                </li>
                </Link>
              </ul>
            ))}
            <Link
            to="/register"
            className=" text-white flex items-center  bg-green-600 rounded my-2  hover:bg-green-900"
          >
            <button className="p-2 ">Register Now</button>
            <FaArrowRight className="mx-2" color="#fff" />
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;

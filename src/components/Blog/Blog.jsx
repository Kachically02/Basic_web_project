import React from "react";
import { Link } from "react-router-dom";
import Blog_img1 from "../../assets/blogimg.svg";
import Blog_img2 from "../../assets/blogimg2.svg";
import Blog_img from "../../assets/blogimg3.svg";
import { FaArrowRight } from "react-icons/fa";
import "./blog.css" 

function Blog() {
  return (
    <div className="">
      <div className="w-10/12 m-auto py-8">
        <h1 className="text-xl font-bold text-center py-4 uppercase">
          Caring is the new marketing
        </h1>
        <p className="text-lg text-center py-2 text ">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
        <div className="  ">
          <div className="container-rapper">
          <div className="container">
            <img src={Blog_img1} alt="" width={300} />
            <div className="child_container ">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className="flex items-center ">
                <Link to="/blog-detail" className="text-green-500">
                  Readmore
                </Link>
                <FaArrowRight size={20} className="text-green-500 ml-4" />
              </div>
            </div>
          </div>
          <div className="container">
            <img src={Blog_img2} alt="" width={300} />
            <div className="child_container">
              <p>What are your safeguarding responsibilities and how can you manage them?</p>
              <div className="flex items-center">
                <Link to="/blog-detail" className="text-green-500">
                  Readmore
                </Link>
                <FaArrowRight size={20} className="text-green-500 ml-4" />
              </div>
            </div>
          </div>
          <div className="container">
          <div className="">
            <img src={Blog_img} alt="" width={300} />
            <div className="child_container">
              <p>Revamping the Membership Model with Triathlon Australia</p>
              <div className="flex items-center">
                <Link to="/blog-detail" className="text-green-500">
                  Readmore
                </Link>
                <FaArrowRight size={20} className="text-green-500 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Blog;

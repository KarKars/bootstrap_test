import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-5 bg-dark text-light text-center position-relative ">
      <div className="container">
        <p className="lead"> Frontend &copy; Bootcamp</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5 h1" id="">
          <BsFillArrowUpCircleFill />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

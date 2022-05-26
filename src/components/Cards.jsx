import React from "react";
import { BsFillLaptopFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BiGroup } from "react-icons/bi";

const Cards = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-md">
          <div className="card bg-dark text-light mb-3">
            <div className="card-header">
              <h1>
                <BsFillLaptopFill />
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light mb-3">
            <div className="card-header">
              <h1>
                <CgProfile />
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card bg-dark text-light mb-3">
            <div className="card-header">
              <h1>
                <BiGroup />
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

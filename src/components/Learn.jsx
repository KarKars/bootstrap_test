import React from "react";
import reacticon from "../elements/reacticon.svg";
import { BsChevronCompactRight } from "react-icons/bs";

const Learn = () => {
  return (
    <>
      <section className="container mt-5">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md ps-5">
            <img src={reacticon} className="img-fluid w-75 d-none d-md-block" alt="" />
          </div>
          <div className="col-md text-center text-md-start">
            <h1>
              Learn the <span className="text-primary">fundamentals</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat impedit itaque ex
              harum fugiat quidem? Nobis sed perferendis neque amet?lorem30
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus, tempora culpa
              voluptates nostrum dolorum facere at laudantium impedit dicta. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Modi, quas.
            </p>
            <a href="" className="btn btn-light">
              <BsChevronCompactRight /> Read More
            </a>
          </div>
        </div>
      </section>
      <section className=" bg-dark mt-5 " id="learn">
        <div className="container py-5">
          <div className="row justify-content-center align-items-center text-light">
            <div className="col-md text-center text-md-start">
              <h1>
                Learn the <span className="text-primary">fundamentals</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat impedit itaque ex
                harum fugiat quidem? Nobis sed perferendis neque amet?lorem30
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus, tempora
                culpa voluptates nostrum dolorum facere at laudantium impedit dicta. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Modi, quas.
              </p>
              <a href="" className="btn btn-light">
                <BsChevronCompactRight /> Read More
              </a>
            </div>
            <div className="col-md ps-5">
              <img src={reacticon} className="img-fluid w-75 d-none d-md-block" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learn;

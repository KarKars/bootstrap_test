import React from "react";
const NewsLetter = () => {
  return (
    <section className="bg-primary p-5 text-light">
      <div className="container ">
        <div className=" d-md-flex justify-content-between align-items-center">
          <h3 className="text-center">sign up for our news letter</h3>
          <div className="input-group news-input">
            <input
              type="text"
              className="form-control w-25 "
              placeholder="Enter Your Email"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <button className="btn btn-dark btn-lg" type="button" id="button-addon1">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

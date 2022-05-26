import React from "react";
import img from "../elements/devimg.svg";

const Showcase = () => {
  return (
    <section className="bg-dark p-5" id="experience">
      <div className="container text-center text-light">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="text-md-start pe-5">
            <h1 className="">
              become a web <span className="text-warning">developer</span>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda labore officia
              dolorum perspiciatis
            </p>
            <button
              className="btn btn-primary btn-md my-5 my-sm-0"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              start the enrolement
            </button>
          </div>
          <img src={img} className="img-fluid w-50 d-none d-md-block p-2 img" />
        </div>
      </div>

      {/* form */}
      <div
        className="modal fade"
        id="enroll"
        tabIndex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="enrollLabel">
                informations
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="lead ">fill out this form and we will back to you soon</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="first-name" className="col-form-label">
                    firstName:
                  </label>
                  <input type="text" className="form-control" placeholder="first Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Adress" className="col-form-label">
                    Adress:
                  </label>
                  <input type="text" className="form-control" placeholder="Adress" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone" className="col-form-label">
                    Phone:
                  </label>
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

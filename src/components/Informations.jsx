import React from "react";

const Informations = () => {
  return (
    <section className="p-5" id="info">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center ">contact Info</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="fw-bold">number: </span> An item
              </li>
              <li className="list-group-item">
                <span className="fw-bold">adress: </span> A second item
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Name: </span> A third item
              </li>
              <li className="list-group-item">
                <span className="fw-bold">surname: </span> A fourth item
              </li>
              <li className="list-group-item">
                <span className="fw-bold">location: </span> And a fifth one
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informations;

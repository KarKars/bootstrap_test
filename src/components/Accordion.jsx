import React from "react";

const Accordion = () => {
  return (
    <div className="container my-4 " id="questions">
      <h1 className="text-center">Frequetly asked</h1>
      <div className="accordion accordion-flush">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
            >
              question 1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti vel cumque
              mollitia consequuntur dicta numquam deserunt. Totam ipsa illum possimus tempora
              commodi. Maxime minima quas animi minus non praesentium accusantium odit excepturi
              illo ut, nulla eos sapiente labore voluptate!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
            >
              question #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eius minima omnis
              suscipit aperiam laudantium, perferendis ut dolores ipsum sequi quam sed doloremque
              culpa eaque numquam velit dolor harum architecto asperiores. Veniam natus atque, est
              ipsa sit quibusdam eveniet fugiat dolor! Explicabo, deserunt.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
            >
              question #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the{" "}
              <code>.accordion-flush</code> className. This is the third item's accordion body.
              Nothing more exciting happening here in terms of content, but just filling up the
              space to make it look, at least at first glance, a bit more representative of how this
              would look in a real-world application.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
            >
              question #1
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corrupti vel cumque
              mollitia consequuntur dicta numquam deserunt. Totam ipsa illum possimus tempora
              commodi. Maxime minima quas animi minus non praesentium accusantium odit excepturi
              illo ut, nulla eos sapiente labore voluptate!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import "./AllFAQs.scss";

const AllFAQs = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handlePlusToggle = () => {
    setShow(!show);
  };
  const handlePlusToggle2 = () => {
    setShow2(!show2);
  };
  return (
    <>
      <div className="allfaqs">
        <div className="container d-flex justify-content-center align-items-center flex-wrap">
          <div className="super-card1 mx-2 my-3 custom-bg-1">
            <Fade>
              <h3
                className={show ? "fs-1 invisible" : "fs-1 visible"}
                id="question"
              >
                Do you have girlfriend?
              </h3>
              <h3
                className={show ? "fs-4 visible" : "fs-4 invisible"}
                id="answer"
              >
                To be honest I've a girlfriend and her name is{" "}
                <span className="red-text">.</span>
              </h3>
            </Fade>
            <div className="plus">
              <button onClick={handlePlusToggle} className="supercard-plus">
                <AiFillPlusCircle />
              </button>
            </div>
          </div>
          <div className="super-card2 mx-2 my-3 custom-bg-2">
            <Fade>
              <h3
                className={show2 ? "fs-1 invisible" : "fs-1 visible"}
                id="question"
              >
                I have a lot of questions. Can you answer me with no anger?
              </h3>
              <h3
                className={show2 ? "fs-4 visible" : "fs-4 invisible"}
                id="answer"
              >
                Never, but you can ask or talk to me as much as you want. I like
                to talk a lot
              </h3>
            </Fade>
            <div className="plus">
              <button onClick={handlePlusToggle2} className="supercard-plus">
                <AiFillPlusCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllFAQs;

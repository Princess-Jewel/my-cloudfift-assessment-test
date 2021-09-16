import React from "react";
import "../testimonyItem/TestimonyItem.css";
import quoteIcon from "../assets/images/quote-icon.svg";


const TestimonyItem = (props) => {
  console.log(props);
  const { testimonials } = props;
  console.log(testimonials);
  return (
    <>
      <div className="testimony-content ">
        <div className="testimony-img ">
          <div className="testimony-img-container">
            <img src={testimonials.image} alt="people" />
          </div>
        </div>
        <div className="testimony-content-text">
          <div className="quote-div">
            <img src={quoteIcon} alt="" />
          </div>
          <div className="testimony-main-div">
            <div className="testimony-main-text">
              <p>{testimonials.testimony}</p>
            </div>
            <div className="testimony-name">
              <p>{testimonials.name}</p>
            </div>
            <div className="testimony-role">
              <p>{testimonials.role}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonyItem;

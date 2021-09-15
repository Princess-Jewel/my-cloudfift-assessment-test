import React from "react";
import "./Testimonial.scss";
import TestimonyImage from "../assets/images/testimony-image.svg";
import Quote from "../assets/images/quote.png";

const Testimonial = () => {
  return (
    <div className='testimonial__wrapper'>
      <h2>
        What are our customers <br /> saying
      </h2>
      <div className='testimony__container'>
        <div className='testimony__image'>
          <img src={TestimonyImage} alt='' />
        </div>
        <div className='testimony__text'>
          <img src={Quote} alt='quote' />
          <p className='testimony__desc'>
            The platform is really convenient to reach out to companies & I have
            managed to secure 2 interviews already! I can also track my
            application status instead of wondering whether the company has seen
            or shortlisted me
          </p>
          <h5>Irma Black</h5>
          <p className='testimony__name'>HR Manager at MasterCard</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

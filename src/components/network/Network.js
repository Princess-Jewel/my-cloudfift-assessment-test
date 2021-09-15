import React from "react";
import "./Network.scss";
import IMG1 from "../assets/images/network-image.svg";
import ArrowRight from "../assets/images/arrow right.png";

const Network = () => {
  return (
    <div className='network__wrapper'>
      <div className='network__container'>
        <div className='network__text'>
          <h2>Over 1000+ jobs from top companies in our network</h2>
          <p>
            Every day we index millions of jobs directly from employer websites.
            We’re committed to accurate, high-quality jobs so you won’t find
            old, duplicated, or spammy listings here.
          </p>
          <p>
            Organize and automate your job search while at home or on the go.
            We’ll deliver new, relevant jobs of interest straight to your inbox.
          </p>
          <div className='view__more'>
            <p className='more__link'>Learn More</p>
            <img src={ArrowRight} alt='img' />
          </div>
        </div>
        <div className='network__image'>
          <img src={IMG1} alt='img' />
        </div>
      </div>
    </div>
  );
};

export default Network;

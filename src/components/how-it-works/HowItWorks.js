import React from "react";
import "./HowItWorks.scss";
import Maker from "../assets/images/marker.svg";
import WorkImg1 from "../assets/images/work-img1.svg";
import WorkImg2 from "../assets/images/work-img2.svg";
import WorkImg3 from "../assets/images/work-img3.svg";

const HowItWorks = () => {
  return (
    <div className='how__it__works__wrapper'>
      <div className='works__image__container'>
        <div className='work__image'>
          <img src={WorkImg2} alt='' />
          <div className='work__title'>
            <h2>
              Product Analyst <span> @ Paystack</span>
            </h2>
          </div>
        </div>
        <div className='work__image special__img'>
          <img src={WorkImg1} alt='' />
          <div className='work__title'>
            <h2>
              HR Manager <span> @ Paystack</span>
            </h2>
          </div>
        </div>
        <div className='work__image special__img2'>
          <img src={WorkImg3} alt='' />
          <div className='work__title'>
            <h2>
              Securities Trader <span> @ Mckinnesy</span>
            </h2>
          </div>
        </div>
      </div>
      <div className='works__text__container'>
        <h2>How it works</h2>
        <p>
          Getajob helps you find the right job easily. Getajob helps you find
          the right job easily. Getajob helps you find the right job easily.
        </p>

        <div className='works__hightlight__wrapper'>
          <div className='works__hightlights'>
            <h5>
              <img src={Maker} alt='Maker' />
              Search Jobs
            </h5>
            <p>
              We have jobs in the most popular industries and with top
              companies. Plus, you can create alerts so you never miss a job
              opportunity.
            </p>
          </div>
          <div className='works__hightlights'>
            <h5>
              <img src={Maker} alt='Maker' />
              Create a Profile and Get Noticed
            </h5>
            <p>
              Create a profile to showcase your skills and experience so
              recruiters can find you. Upload your CV so you can apply for jobs
              quickly and easily.
            </p>
          </div>
          <div className='works__hightlights'>
            <h5>
              <img src={Maker} alt='Maker' />
              Apply for jobs
            </h5>
            <p>
              Find the training you need to improve your skills, or visit our
              Career Center for tips and advice to build your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

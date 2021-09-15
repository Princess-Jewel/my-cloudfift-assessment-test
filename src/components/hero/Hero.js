import React from "react";
import Header from "../header/Header";
import "./hero.scss";
import HeroImage from "../assets/images/hero-image.svg";
import Search from "../search/Search";
import Paystack from "../assets/images/paystack-removebg-preview.svg";
import Google from "../assets/images/google-removebg-preview.svg";
import Kpmg from "../assets/images/kpmg-removebg-preview.svg";

const Hero = () => {
  return (
    <div className='hero__wrapper'>
      {/* header component */}
      <Header />
      <div className='hero__container'></div>
      <div className='hero__info'>
        <div className='hero__text'>
          <h1 className='hero__title'>
            Find a <span className='job'>job</span> easily
          </h1>
          <p className='hero__description'>
            With verified, up-to-date job listings directly from employer
            websites, we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>

          {/* search component */}
          <Search />

          <div className='trusted__wrapper'>
            <h5 className='trusted__title'>Trusted by:</h5>
            <div className='trusted__images'>
              <img src={Paystack} alt='Paystack' className='Paystack' />
              <img src={Google} alt='Google' className='Google' />
              <img src={Kpmg} alt='Kpmg' className='Kpmg' />
            </div>
          </div>
        </div>
        <div className='hero__image'>
          <img src={HeroImage} alt='HeroImage' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

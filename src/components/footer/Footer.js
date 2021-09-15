import React from "react";
import "./Footer.scss";
import Facebook from "../assets/images/Facebook.svg";
import Twitter from "../assets/images/Twitter.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Instagram from "../assets/images/Instagram.svg";
import FooterLogo from "../assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <div className='footer__container footer1'>
        <img src={FooterLogo} alt='' />
        <p>
          Getajobng provides a full online service for anyone looking for a new
          job. We're not a recruitment agency, we're a job site.
        </p>
      </div>
      <div className='footer__container footer2'>
        <h5>Information</h5>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
      <div className='footer__container footer3'>
        <h5>Job Seekers</h5>
        <ul>
          <li>Create Account</li>
          <li>Job List</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className='footer__container footer4'>
        <h5>Employers</h5>
        <ul>
          <li>Create Account</li>
          <li>Job List</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className='footer__container footer5'>
        <h5>Social Media:</h5>
        <ul>
          <li>
            <img src={Facebook} alt='img' />
          </li>
          <li>
            <img src={Twitter} alt='img' />
          </li>
          <li>
            <img src={LinkedIn} alt='img' />
          </li>
          <li>
            <img src={Instagram} alt='img' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

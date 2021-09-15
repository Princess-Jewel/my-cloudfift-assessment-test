import React from "react";
import "./Categories.scss";
import IMG1 from "../assets/images/Oil and Gas icon.svg";
import IMG2 from "../assets/images/Healthcare icon.svg";
import IMG3 from "../assets/images/Accounting icon.svg";
import IMG4 from "../assets/images/Accounting icon (1).svg";
import IMG5 from "../assets/images/Oil and Gas icon (1).svg";
import IMG6 from "../assets/images/Laptop.svg";
import IMG7 from "../assets/images/Security icon.svg";
import IMG8 from "../assets/images/Data Analyst Icon.svg";

const Categories = () => {
  return (
    <div className='categories__wrapper'>
      <h2 className='category__title'>Popular Categories</h2>
      <div className='categories__gallery'>
        <div className='single__category'>
          <img src={IMG1} alt='oil' />
          <h5>Oil and Gas</h5>
          <p>(20 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG2} alt='health' />
          <h5>Healthcare</h5>
          <p>(10 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG3} alt='ICON' />
          <h5>Education</h5>
          <p>(10 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG4} alt='ICON' />
          <h5>Accounting</h5>
          <p>(10 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG5} alt='ICON' />
          <h5>Design, Art and Multimedia</h5>
          <p>(20 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG6} alt='ICON' />
          <h5>Technology</h5>
          <p>(20 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG7} alt='ICON' />
          <h5>Security</h5>
          <p>(10 new jobs )</p>
        </div>
        <div className='single__category'>
          <img src={IMG8} alt='ICON' />
          <h5>Data Analyst</h5>
          <p>(10 new jobs )</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;

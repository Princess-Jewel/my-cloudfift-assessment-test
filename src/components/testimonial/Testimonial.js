import React, { Component } from "react";
import "./testimonial.css";
import "./Testimonial.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonyItem from "../testimonyItem/TestimonyItem";
import testimonies from "../../testimonial-items";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 4000,
      responsive: [
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
    <div className="testimonial__wrapper">
        <div className="title testimonials-title ">
          <h2 className="">What are our customers <br /> saying</h2>
        </div>
        <div className="testimonial-slider-container">
          <div className="slick-btn-container" style={{ textAlign: "right" }}>
            <button className="chev-btn testimony-chev" onClick={this.previous}>
              <img src={arrowLeft} alt="" />
            </button>
            <button className="chev-btn testimony-chev" onClick={this.next}>
              <img src={arrowRight} alt="" />
            </button>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {testimonies.map((testimony) => {
              console.log(testimony);
              return (
                <TestimonyItem key={testimony.id} testimonials={testimony} />
              );
            })}
          </Slider>
        </div>
      </div>
   
    );
  }
}

export default Testimonial;































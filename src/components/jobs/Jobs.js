import React from "react";
import "./Jobs.scss";
import IMG1 from "../assets/images/image.svg";
import IMG2 from "../assets/images/image (1).svg";
import IMG3 from "../assets/images/image 2.svg";
import IMG4 from "../assets/images/Group.svg";

const Jobs = () => {
  return (
    <div className='jobs__wrapper'>
      <h2>Recommended Jobs</h2>
      <div className='slides'>
        <div className='slide'>
          <div className='top-right'>
            <p></p>
            <p className='align-right'>fulltime</p>
          </div>
          <div>
            <img src={IMG1} alt='img' />
            <h5>QA Engineer</h5>
          </div>
          <h5 >Paystack </h5>
          <p></p>
          <p></p>
        </div>
        <div className='slide'>
          <p>fulltime</p>
          <img src='' alt='' />
          <h5></h5>
          <h5>Paystack </h5>
          <p></p>
          <p></p>
        </div>
        <div className='slide'>
          <p>fulltime</p>
          <img src='' alt='' />
          <h5></h5>
          <h5>Paystack </h5>
          <p></p>
          <p></p>
        </div>
        <div className='slide'>
          <p>fulltime</p>
          <img src='' alt='' />
          <h5></h5>
          <h5>Paystack </h5>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

// import React, { Component } from "react";
// import Slider from "react-slick";
// import "./Jobs.scss";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red", position: "absolute", top: "50px", right: "20px" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green", position: "absolute", top: "50px", left: "1100px" }}
//       onClick={onClick}
//     />
//   );
// }

// export default class Jobs extends Component {
//   render() {
//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       speed: 500,
//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     }

//     return (
//       <div className='jobs__wrapper'>
//         <h2>Recommended Jobs</h2>
//         <Slider {...settings}>
//           <div className="slide">
//             <h3>1</h3>
//           </div>
//           <div className="slide">
//             <h3>2</h3>
//           </div>
//           <div className="slide">
//             <h3>3</h3>
//           </div>
//           <div className="slide">
//             <h3>4</h3>
//           </div>
//           <div className="slide">
//             <h3>5</h3>
//           </div>
//           <div className="slide">
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

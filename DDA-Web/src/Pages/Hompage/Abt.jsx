import React from 'react';
import './Abt.css';
import sir from '../../assets/image/sir.jpg'; 
function Abt() {
  return (
    <>
        <div className='ab'>
      <div className="about">
        <div className="container about-head p-0">
          <p className="about-p1">About</p>
          <h1 className="about-h1">
            DesignDot Academy <br/> Private Limited
          </h1>
        </div>
        <div className="container about-image p-0">
          <div className="image">
            <img
              src={sir}
              alt="About Us"
            />
          </div>
          <div className="about-content">
            <div className="para">
              <p className="about-content-p1">
               DesignDot Academy Private Limited is a forward-thinking digital solutions company dedicated to bridging creativity, technology, and strategy. Founded with the mission to empower businesses and individuals through design and innovation, we offer a comprehensive range of services tailored to meet modern digital needs.<br /><br />
                <h4>Leadership:</h4>

              <strong>  Mr. Vimal Viswanathan,</strong> Founder & Director, is the visionary behind DesignDot Academy. With a deep passion for design and education, he has been instrumental in shaping the company’s creative and strategic direction.<br /><br />

              <strong>  Mr. Krishna Shankar,</strong> Director & Investor, brings valuable business insight and strategic investment expertise, driving growth and sustainability for the organization.<br /><br />
                <h4>Our Vision:</h4>

                To be a leading force in design and digital innovation, fostering creativity and delivering impactful solutions that make a difference.
              </p>
              {/* <button className="about-b1">
                Free Consultation <i className="fa-solid fa-arrow-right"></i>
              </button> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Abt;

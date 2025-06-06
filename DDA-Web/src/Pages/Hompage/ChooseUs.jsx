import React from 'react'
import './ChooseUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Bulb from '../../assets/image/bulb.png'
import Quality from '../../assets/image/quality.png'
import Money from '../../assets/image/money.png'
import World from '../../assets/image/world.png'

function ChooseUs() {
  return (
    <>
    <div className='choose-container'>
      <div className='choose-sec'>
      <div className="why-choose-head p-0">
        <div className="why-choose-headcontent">
          <p className="why-choose-p1">Why Choose Us</p>
          <h1 className="why-choose-h1">
            Why Choose Us ?
          </h1>
        </div>
      </div>

    <div className='ycard'>
    <div className="ycard1">
          <img src={Bulb} alt='Bulb' />
          <h3>Innovation</h3>
          <p>Where ideas spark change and technology meets imagination.</p>
        </div>
        <div className="ycard1">
        <img src={Quality} alt='Quality' />
        <h3>Quality-Focused</h3>
          <p>High-performance solutions built for speed, usability, and cross-device reliability</p>
        </div>
        <div className="ycard1">
        <img src={Money} alt='Money' />
        <h3>Value For Money</h3>
          <p>Premium quality. Fair price. Maximum value.</p>
        </div>

        <div className='ycard2'>
          <div className='ycard2-h1' >
          <h1>Where design meets <br/> innovation.</h1>
          <div className='world'>
          <img src={World} alt='Bulb' />
          </div>
          
          </div>
          
          <p>At DesignDot Acadamy, we create innovative, user-focused web solutions that <br /> combine sleek design with powerful functionality—helping businesses grow and <br /> stand out in the digital world.</p>
          <h4>Let’s build the future—together.</h4>
          <div className="ycard2-b1">
   <a href=' https://www.linkedin.com/company/designdotacademy/'>   <button>
        
        LinkedIn
        <FontAwesomeIcon icon={faArrowRight} />
      </button></a>
    <a href='https://www.instagram.com/designdot_academy/profilecard/?igsh=MXRoOXhyOHhxdDdwZQ=='> <button>
        
        Instagram
        <FontAwesomeIcon icon={faArrowRight} />
      </button></a> 
      
    </div>
       

        </div>
        

    </div>

      
      </div>

    </div>

    </>
  )
}

export default ChooseUs
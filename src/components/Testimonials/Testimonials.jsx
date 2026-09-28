import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user_1.png";
import user_2 from "../../assets/user_2.png";
import user_3 from "../../assets/user_3.png";
import user_4 from "../../assets/user_4.png";
import user_5 from "../../assets/user_5.png";
import user_6 from "../../assets/user_6.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

     const slideBackward = ()=>{
         if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ayesha Khanum</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                My daughter is in preschool at this school, and I’m very happy
                with our experience. The teachers take care of the children very
                nicely and create a safe, nurturing environment. The studies are
                also good, and I can see positive development in her learning
                and confidence. A special thanks to her class teacher, Shabreen
                Ma’am, for her care, patience, and dedication. Overall, a great
                place for early education.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rathamma Channappa</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                I am happy with the preschool, The teachers are caring, patient
                and supportive.The school provides a safe and friendly
                environment where children can learn through fun and engaging
                activities.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>dikshita jain</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                Kidzzee Doddaballapura.. have good source of teaching n non
                teaching staff .. children at kidzzee r safe n feel life home
                environment.. They have well trained Teachers
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>VMK Solutions</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                This is the best recommend preschool in Doddaballapura for
                nurturing the child. My child having a great experience at the
                school with fun and experimental based learning.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>sathvika hitej</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                The best pre school in doddaballapur, management is good ,
                curriculum is very good more of activities and personality
                development
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_6} alt="" />
                <div>
                  <h3>ilyas ilyas</h3>
                  <span>Doddaballapura, Karnataka</span>
                </div>
              </div>
              <p>
                Nice environment and teachers are really good. They are really good in handling small children's, management and teachers are all cooperative
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

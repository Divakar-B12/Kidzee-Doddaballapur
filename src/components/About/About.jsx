import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-rigth">
        <h3>About Kidzee</h3>
        <h2>
          We encourage, educate, and equip today's children to be tomorrow's
          leaders.
        </h2>
        <p>
          We believe that there is unique potential in every child, and Kidzee
          is committed to nurturing it. As one of the leading preschools in
          India, we nurture and shape young minds through our best-in-class,
          age-appropriate, progressive curriculum. We are transforming early
          childhood education through continuous innovation and upgradation to
          meet the evolving needs of children and prepare them for the future.
          Our proactive approach focuses on grooming children to be “ever-ready
          for life.” Our commitment to quality education also emphasizes
          self-reliance, peer interaction, and individual growth. With a strong
          foundation and a well-established educational model, we strive to
          create lasting value for children, parents, and all our stakeholders.
        </p>
        <p>
          We are committed to instilling skills, knowledge, and values in our
          children in order to give them an inner voice to face the challenges
          of the twenty-first century. Our learning environment allows each
          child to nurture the learning minds namely the Empathetic Mind,
          Conscientious Mind, Focused Mind, Analytical Mind, and Inventive Mind.
        </p>
        <p>
          Backed by Zee Group, Zee Learn aims to empower India's children and
          youth “We provide the environment to ignite, nurture and unleash your
          potential and talent.”
        </p>
      </div>
    </div>
  );
};

export default About;

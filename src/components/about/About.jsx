import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid"> 
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello there! My name is Jirtus Sanasam, and I'm a passionate
              full-stack software developer based in Delhi, India.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage front__end"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Back-End</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage back__end"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Database</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage database"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">DevOps</h3>
                <span className="skills__number"></span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage devops"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

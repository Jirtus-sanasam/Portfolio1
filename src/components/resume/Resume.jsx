import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((id, icon, title, year, desc) => {
            if (Data.category === "education") {
              return (
                <Card
                  Key={id}
                  icon= {icon}
                  title={title}
                  year={year}
                  desc={desc}
                />
              );
            } 
          })}
        </div>

        {/* <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  Key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Resume;

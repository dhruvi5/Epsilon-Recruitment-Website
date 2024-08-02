import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <div className="about-us-text">
        <h2 className="about-us-heading">About the Program</h2>
        <p className="about-us-description">
          The Epsilon Program is a transformative initiative designed to help
          individuals unlock their full potential. Our program offers
          comprehensive training and support to guide you on a journey of
          self-discovery and growth.
        </p>
        <br></br>
        <p className="about-us-description">
          Join us to be part of a community dedicated to personal and
          professional excellence. Whether you're looking to enhance your
          career, develop new skills, or simply become the best version of
          yourself, the Epsilon Program has something for everyone.
        </p>
        <p className="about-us-description"></p>

        <button className="home-button">Learn More...</button>
      </div>
      <div className="about-us-image">
        <img src="path/to/your/image.jpg" alt="Epsilon Program" />
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutUs;

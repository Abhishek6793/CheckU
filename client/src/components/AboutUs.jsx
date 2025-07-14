import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Founded on the belief that exceptional healthcare should be accessible to all, we've been serving our community for over two decades with unwavering dedication. Our state-of-the-art facility houses a team of board-certified specialists who combine years of expertise with the latest medical innovations. From routine check-ups to complex procedures, we pride ourselves on creating a warm, welcoming environment where patients feel heard, respected, and cared for. Our mission is simple: to be your trusted healthcare partner, providing comprehensive medical services that prioritize your comfort, safety, and overall well-being at every step of your health journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

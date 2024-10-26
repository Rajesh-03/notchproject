import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./back.css";
import logo from "../../images/logotransparent.png";

const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: url('../../images/herobg.jpg') no-repeat center center/cover;
  width: 100%;
  height: 100vh;
  background-attachment: fixed; /* Ensure smooth loading */
`;

const Logo = styled.img`
  height: 120px;
  width: 120px;
  position: absolute;
  top: 1rem;
  left: 2rem;
  loading: "lazy"; /* Enable lazy loading */

  @media (max-width: 768px) {
    height: 90px;
    width: 90px;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

const TextBox = styled.div`
  margin-left: 110px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
    text-align: center;
  }
`;

const Hero = ({ refs }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuActive(false);
  };

  return (
    <Header className="header">
      <Logo src={logo} alt="Company Logo" loading="lazy" />

      <section>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line-align1">
            <div className="line line1"></div>
          </div>
          <div className="line-align2">
            <div className="line line2"></div>
          </div>
          <div className="line-align3">
            <div className="line line3"></div>
          </div>
        </div>
      </section>

      <section className={`menu ${menuActive ? "active" : ""}`} id="menu">
        <a onClick={() => scrollToSection(refs.homeRef)} className="text-gray">Home</a>
        <a onClick={() => scrollToSection(refs.projectRef)} className="text-gray">Projects</a>
        <a onClick={() => scrollToSection(refs.EqpRef)} className="text-gray">Equipments</a>
        <a onClick={() => scrollToSection(refs.TeamRef)} className="text-gray">Team</a>
        <a onClick={() => scrollToSection(refs.CareerRef)} className="text-gray">Careers</a>
        <a onClick={() => scrollToSection(refs.ContactRef)} className="text-gray">Contact</a>
        <div className="close-btn" id="closebtn" onClick={toggleMenu}>
          <MdClose style={{ fontSize: "60px", cursor: "pointer", color: "white" }} alt="close icon" />
        </div>
      </section>

      <TextBox className="text-box">
        <div className="text-content">
          <h1>Building the Roads of Tomorrow</h1>
          <p>
            At NotchIndiaProjects, we are dedicated to providing high-quality road construction services that pave the way for a brighter future. Our team of experts utilizes the latest technologies and techniques to ensure safe, durable, and efficient roadways for all.
          </p>
          <p>
            From urban streets to highways, we manage every project with precision and care, ensuring that our infrastructure meets the needs of our growing communities. Together, let's create pathways to progress!
          </p>
          <button className="btn-link" style={{ background: "#00354f", color: "white", textDecoration: "none" }}>Request a Consultation</button>
        </div>
      </TextBox>
    </Header>
  );
};

export default Hero;

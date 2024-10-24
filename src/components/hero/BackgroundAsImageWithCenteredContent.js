import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./back.css";
import logo from "../../images/logotransparent.png"

// Styled components for the header and other elements can be defined here
const Header = styled.header`
  position: relative; /* Ensure it positions properly */
  display: flex;
  align-items: center; /* Center align vertically */
  padding: 1rem; /* Adjust padding as needed */
`;

const Logo = styled.img`
height: 120px; /* Keep height unchanged */
  width: 120px; /* Keep width unchanged */
  position: absolute;
  top: 1rem;
  left: 2rem;

   @media (max-width: 768px) {
    height: 90px; /* Keep height unchanged */
    width: 90px; /* Keep width unchanged */
    top: 0.5rem; /* Adjust top spacing */
    left: 0.5rem; /* Adjust left spacing */
  }
`;

const TextBox = styled.div`
  margin-left: 110px; /* Maintain margin for desktop */

  @media (max-width: 768px) {
    margin-left: 0; /* Remove margin for mobile */
    padding: 1rem; /* Add padding for mobile */
    text-align: center; /* Center text on mobile */
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
    setMenuActive(false); // Close the menu after scrolling
  };

  return (
    <Header className="header">
      <Logo src={logo} alt="Company Logo" /> 

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
    <button className="btn-link" style={{background:"#00354f",color:"white",textDecoration:"none"}} >Request a Consultation</button>
  </div>
</TextBox>

    </Header>
  );
};

export default Hero;

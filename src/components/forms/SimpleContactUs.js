import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import Modal from "react-modal"; // Ensure you've installed react-modal

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const CareerBox = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg relative shadow-lg`}
  
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
`;



const CompanyEmail = tw.p`text-lg text-teal-300 text-white font-medium mb-8`;
const Button = styled.button`
  ${tw`mt-6 py-3 px-6 bg-teal-500 text-white rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-teal-600 hocus:-translate-y-px hocus:shadow-xl`}
  margin-right: 1rem; // Gap between buttons
`;
const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

// Modal Styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
  },
};

const ModalHeader = styled.h2`
  ${tw`text-2xl font-bold mb-4`}
`;

const ModalButton = styled.button`
  ${tw`mt-4 py-2 px-4 bg-teal-500 text-white rounded-full font-bold transition duration-300 transform focus:outline-none hover:bg-teal-600 hocus:-translate-y-px`}
`;

export default () => {
  const companyEmail = "contracts@notchindiaprojects.com";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div style={{ backgroundColor: "#00354f" }}>
      <Container>
        <Content>
          <CareerBox>
            <h2>Careers</h2>
            <CompanyEmail>Contact us at: {companyEmail}</CompanyEmail>

            {/* Apply Button */}
            <Button onClick={() => window.location.href = `mailto:${companyEmail}`}>
              Apply Now
            </Button>
            {/* Openings Button */}
            <Button onClick={openModal}>
              View Openings
            </Button>
          </CareerBox>
          <SvgDotPattern1 />
        </Content>
      </Container>

      {/* Modal for Job Openings */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Job Openings"
      >
        <ModalHeader>Job Openings</ModalHeader>
        <button onClick={closeModal} style={{ margin: '10px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
          Close
        </button>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Front-End Developer</li>
          <li>Back-End Developer</li>
          <li>UI/UX Designer</li>
          <li>Project Manager</li>
          {/* Add more job openings as needed */}
        </ul>
        <ModalButton onClick={closeModal}>Close Modal</ModalButton>
      </Modal>
    </div>
  );
};

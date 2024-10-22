import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import "./ProjectDetails.css"; // Custom styles

const ProjectDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  z-index: 2;
  background-color: #f4f8fc;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MediaSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1 1 45%;
  max-width: 45%;
  z-index: 2;
  cursor: pointer;

  img {
    width: 100%;
    height: auto; /* Adjust to auto for responsive */
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Adjust max-width for smaller screens */
  }
`;

const VideoContainer = styled.div`
  flex: 1 1 45%;
  max-width: 45%;
  z-index: 2;

  video {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 90%; /* Adjust max-width for smaller screens */
  }
`;

const ProjectDetailsContent = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`;

const DetailItem = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
  z-index: 2;

  strong {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Smaller font size for mobile */
  }
`;

const BackButton = styled(Link)`
  display: block;
  margin: 15px auto;
  text-align: center;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  width: 180px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 150px; /* Adjust button width for smaller screens */
    padding: 6px 12px; /* Adjust padding */
  }
`;

const SVGBackground = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  animation: moveBg 15s infinite linear;
  opacity: 0.3;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;


const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  position: relative; // Set relative positioning for the modal content
  max-width: 50%; // Increase for more screen space
  max-height: 50%; // Increase for more screen space
  overflow: hidden; // Hide overflow to maintain aspect ratio
  display: flex; // Use flexbox for alignment
  justify-content: center; // Center content horizontally
  align-items: center; // Center content vertically
`;

const CloseButton = styled.button`
  position: absolute; // Absolute positioning
  top: 80px; // Position from the top
  left: 50%; // Position from the left
  transform: translateX(-50%); // Center it horizontally
  background: #fff;
  color: #000;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 18px;
  z-index: 1001; // Ensure it is above other elements

  &:hover {
    background-color: #f4f4f4;
  }
`;



const UserImagesGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
  margin-top: 20px;

  img {
    width: 400px; /* Increase width as needed */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      width: 100%; /* Full width for mobile */
      max-width: 90%; /* Limit width for mobile */
      height: auto; /* Maintain aspect ratio */
    }
  }
`;


const ProjectDetails = ({ tabs }) => {
  const { projectId } = useParams();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  let project;

  // Find the project by its ID
  Object.keys(tabs).forEach((tabKey) => {
    const foundProject = tabs[tabKey].find((p) => p.project_id === parseInt(projectId));
    if (foundProject) {
      project = foundProject;
    }
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
  };

  // Handle image click in user gallery
  const openModal = (image) => {
    setSelectedImage(image); // Set clicked image
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <SVGBackground
        viewBox="0 0 1200 2000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <circle
            key={index}
            cx={Math.random() * 1200}
            cy={Math.random() * 2000}
            r={Math.random() * 50 + 20}
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
          />
        ))}
      </SVGBackground>

      <ProjectDetailsContainer>
        <ProjectTitle>{project.title}</ProjectTitle>

        <MediaSection>
          {project.imageSrc && (
            <ImageContainer onClick={() => handleImageClick(0)}>
              <img src={project.imageSrc} alt={project.title} />
            </ImageContainer>
          )}
          {project.videoSrc && (
            <VideoContainer>
              <video autoPlay muted loop>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
          )}
        </MediaSection>

        <ProjectDetailsContent>
          {project.location && (
            <DetailItem>
              <strong>Location:</strong> {project.location}
            </DetailItem>
          )}
          {project.client && (
            <DetailItem>
              <strong>Client:</strong> {project.client}
            </DetailItem>
          )}
          {project.estimated_cost && (
            <DetailItem>
              <strong>Estimated Cost:</strong> {project.estimated_cost}
            </DetailItem>
          )}
          {project.content && (
            <DetailItem>
              <strong>Project Details:</strong> {project.content}
            </DetailItem>
          )}
        </ProjectDetailsContent>



        {/* User Images Gallery */}
        <UserImagesGallery>
  {project.additionalImages && project.additionalImages.length > 0 ? (
    project.additionalImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`User Upload ${index}`}
        onClick={() => openModal(image)} // Open modal on image click
      />
    ))
  ) : (
    <p>No user images available.</p> // Message if no images
  )}
</UserImagesGallery>

<BackButton to="/">Back</BackButton>
        {/* Modal for image display */}
        {isModalOpen && (
          <ModalOverlay onClick={closeModal}>
            <CloseButton onClick={closeModal}>✕</CloseButton>
            <ModalContent>
              <ModalImage src={selectedImage} alt="Selected" />
            </ModalContent>
          </ModalOverlay>
        )}
      </ProjectDetailsContainer>
    </>
  );
};

export default ProjectDetails;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import rmcplantImage from '../../images/rmc.JPG';
import rmcplantVideo from '../../images/rmc.mp4'; 
import crusher from "../../images/crusher.JPG";
// import crusherVideo from "../../images/crusher.mp4";
import rmcsalem from "../../images/rmcsalem.MP4";
import rmcsalemImage from "../../images/rmcsalem.JPG";
import transit from "../../images/transit.JPG"

const Container = tw.div`max-w-screen-lg mx-auto p-4`;
const Title = tw.h1`text-4xl font-bold text-center mb-8 text-[#008C8C]`; // Set title color to #008C8C

const CardContainer = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center`;
const Card = tw.div`relative max-w-xs w-full cursor-pointer transition-transform transform hover:scale-105`;
const CardImage = tw.img`w-full h-48 object-cover rounded-lg`;
const OverlayText = tw.div`absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-25 rounded-lg`;
const CardTitle = tw.h2`text-xl font-bold text-center`;
const Modal = tw.div`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50`;
const ModalContainer = tw.div`relative w-[90%] max-w-screen-lg`;
const CloseButton = tw.button`absolute bottom-auto  right-1/2 text-white text-3xl transition-transform transform hover:scale-110 z-10`;
const Image = tw.img`h-96 w-auto object-cover mx-auto opacity-75`; // Adjusted opacity for the image
const Video = tw.video`h-96 w-auto object-cover mx-auto`; // Video style without controls
const MoreEquipmentsButtonContainer = tw.div`flex justify-center mt-8`;
const MoreEquipmentsButton = tw.button`py-2 px-6 bg-[#008C8C] text-white font-bold rounded-lg transition-transform transform hover:scale-105`;

const EquipmentList = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const equipmentData = [
    {
      title: "RMC Plant (Madurai)",
      image: rmcplantImage,
      video: rmcplantVideo, // Add video property for RMC Plant
    },
    {
      title: "RMC Plant (Salem)",
      image: rmcsalemImage,
      video: rmcsalem, // Add video property for RMC Plant
    },
    {
      title: "Crusher",
      image: crusher,
      // video: crusherVideo, 
    },
    {
      title: "CTB Plant",
      image: "https://media.istockphoto.com/id/824319534/photo/concrete-batching-plant-blue-sky.jpg?s=612x612&w=0&k=20&c=xOzCa_bLoXFcwu6gHKFyQfC5BvLJJkrrJJ27Ay3LDOE=",
    },
    {
      title: "Pavers",
      image: "https://www.nbmcw.com/images/38-Construction-Equipments/41466-VOGELE.webp",
    },
    {
      title: "TRANSIT MIXER",
      image: transit,
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  // Function to handle button click
  const handleMoreEquipmentsClick = () => {
    navigate('/equipments');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }} css={[tw`relative`, tw`top-0`]}>
      <Container>
        <Title>Construction Site Equipment</Title>
        <CardContainer>
          {equipmentData.map((equipment, index) => (
            <Card key={index} onClick={() => openModal(index)}>
              <CardImage src={equipment.image} alt={equipment.title} />
              <OverlayText>
                <CardTitle>{equipment.title}</CardTitle>
              </OverlayText>
            </Card>
          ))}
        </CardContainer>

        {/* Centered More Equipments Button */}
        <MoreEquipmentsButtonContainer>
          <MoreEquipmentsButton onClick={handleMoreEquipmentsClick}>
            More Equipments
          </MoreEquipmentsButton>
        </MoreEquipmentsButtonContainer>

        {/* Modal */}
        {isModalOpen && (
          <Modal onClick={handleOverlayClick}>
            <ModalContainer>
            <CloseButton onClick={closeModal} style={{ top: '-50px' }}>&times;</CloseButton>
              {equipmentData[selectedImageIndex].video ? ( // Check if video exists
                <Video autoPlay muted loop>
                  <source src={equipmentData[selectedImageIndex].video} type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
              ) : (
                <Image
                  src={equipmentData[selectedImageIndex].image}
                  alt={equipmentData[selectedImageIndex].title}
                />
              )}
            </ModalContainer>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default EquipmentList;

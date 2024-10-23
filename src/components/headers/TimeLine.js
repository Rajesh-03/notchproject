import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import rmcvideo from "../../images/rmc.mp4";
import crushervideo from "../../images/crusher.mp4";
import rmcplantImage from '../../images/rmc.JPG';
import rmcplantVideo from '../../images/rmc.mp4';
import crusher from "../../images/crusher.JPG";
import crusherVideo from "../../images/crusher.mp4";
import rmcsalem from "../../images/rmcsalem.MP4";
import rmcsalemImage from "../../images/rmcsalem.JPG";
import transit from "../../images/transit.JPG";

const TestingCard = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate();

  const projects = [
    {
      title: "RMC Plant (Madurai)",
      image: rmcplantImage,
      video: rmcplantVideo,
    },
    {
      title: "RMC Plant (Salem)",
      image: rmcsalemImage,
      video: rmcsalem,
    },
    {
      title: "Crusher",
      image: crusher,
      video: crusherVideo,
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

  useEffect(() => {
    const timeoutIds = projects.map((_, index) =>
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 300)
    );

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <section style={{ position: 'relative', padding: '50px', backgroundColor: '#00354f', minHeight: '100vh', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', zIndex: 2, opacity: 0, animation: 'fadeIn 1s forwards', animationDelay: '0.5s' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Our Equipment</h1>
        <p style={{ fontSize: '20px', margin: '10px 0', opacity: 0.8 }}>Explore our state-of-the-art machinery and technology</p>
      </div>

      <div style={{ position: 'absolute', top: '20px', cursor: 'pointer' }} onClick={handleHomeClick}>
        <FontAwesomeIcon icon={faHome} size="2x" style={{ color: '#007BFF', transition: 'color 0.3s' }} 
          onMouseOver={(e) => e.currentTarget.style.color = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.color = '#007BFF'}
        />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              marginBottom: '40px',
              opacity: 0,
              animation: `fadeInUp 1s forwards`,
              animationDelay: `${(index + 1) * 0.5}s`,
            }}
          >
            {project.video ? (
              <video
                src={project.video}
                style={{
                  width: '600px',
                  height: 'auto',
                  borderRadius: '5px',
                  margin: index % 2 === 0 ? '0 20px 0 0' : '0 0 0 20px',
                  transition: 'transform 0.3s',
                }}
                autoPlay
                muted
                loop
                playsInline
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '600px',
                  height: 'auto',
                  borderRadius: '5px',
                  margin: index % 2 === 0 ? '0 20px 0 0' : '0 0 0 20px',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            )}
            <h2 style={{ fontSize: '36px', margin: '0 20px', flex: 1 }}>
              {project.title}
            </h2>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TestingCard;

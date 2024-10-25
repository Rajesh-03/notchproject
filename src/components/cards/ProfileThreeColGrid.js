import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import bg from "../../images/user.png"; // Default background image
import bg2 from "../../images/usernew1.png";
import bg3 from "../../images/usernew2.png";
import user1bg from "../../images/userbg1.png"; // Custom background images
import user2bg from "../../images/userbg2.png";
import user3bg from "../../images/userbg6.png";
import user4bg from "../../images/userbg3.png";
import user5bg from "../../images/userbg4.png";
import user6bg from "../../images/userbg5.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate



const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`text-[#008C8C]`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;
const MoreEquipmentsButtonContainer = tw.div`flex justify-center mt-8`;
const MoreEquipmentsButton = tw.button`py-2 px-6 bg-[#008C8C] text-white font-bold rounded-lg transition-transform transform hover:scale-105`;


const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = styled.div`
  ${tw`mt-8 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center relative`}
  border-radius: 8px;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  ${tw`relative w-64 h-64 flex items-center justify-center`}
  background-color: ${({ bgColor }) => bgColor || "#f0f0f0"};
  transition: opacity 0.5s ease;

  &:hover {
    background-image: ${({ hoverBgImage }) => `url(${hoverBgImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;

const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-4`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-[#008C8C]`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  }
`;

const CardLinks = styled.div`
  ${tw`mt-4 flex`}
  .link {
    ${tw`mr-4 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;


export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  cards = [
    {
      imageSrc: bg,
      position: "Project Manager",
      name: "VIMALATHITHAN S",
      bgColor: "#ffcccc", // Light Red
      hoverBgImage: user1bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: bg2,
      position: "Project Manager",
      name: "SIVAPERUMAL A",
      bgColor: "#ccffcc", // Light Green
      hoverBgImage: user2bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: bg3,
      position: "Project Manager",
      name: "RAJAVEL M",
      bgColor: "#ccccff", // Light Blue
      hoverBgImage: user3bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: bg3,
      position: "Project Manager",
      name: "PRAKASH KANNAN",
      bgColor: "#fff5cc", // Light Yellow
      hoverBgImage: user4bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: bg2,
      position: "Project Manager",
      name: "ARJUNA PANDI V",
      bgColor: "#ffccff", // Light Pink
      hoverBgImage: user5bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: bg,
      position: "Project Manager",
      name: "PRABU M",
      bgColor: "#ccffff", // Light Cyan
      hoverBgImage: user6bg,
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
  ]
}) => {
  const navigate = useNavigate();
  const handleMoreEquipmentsClick = () => {
    navigate('/team');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  
  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            {heading && <Heading>{heading}</Heading>}
          </HeadingContainer>
          <Cards>
            {cards.map((card, index) => (
              <Card key={index}>
                <CardWrapper bgColor={card.bgColor} hoverBgImage={card.hoverBgImage}>
                  <CardImage imageSrc={card.imageSrc} />
                </CardWrapper>
                <CardContent>
                  <span className="position">{card.position}</span>
                  <span className="name">{card.name}</span>
                  <CardLinks>
                    {card.links.map((link, linkIndex) => (
                      <a key={linkIndex} className="link" href={link.url}>
                        <link.icon className="icon" />
                      </a>
                    ))}
                  </CardLinks>
                </CardContent>
              </Card>
            ))}
          </Cards>
          <MoreEquipmentsButtonContainer>
          <MoreEquipmentsButton onClick={handleMoreEquipmentsClick}>
            More Team
          </MoreEquipmentsButton>
        </MoreEquipmentsButtonContainer>
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

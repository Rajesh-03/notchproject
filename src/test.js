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

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`text-[#008C8C]`;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = styled.div`
  ${tw`mt-8 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center relative`}
  border-radius: 8px;
  overflow: hidden;
`;

const CardWrapper = styled.div`
  ${tw`relative w-64 h-64 flex items-center justify-center`}
  background-color: ${({ bgColor }) => bgColor || "#f0f0f0"};
  transition: background-color 0.3s ease, background-image 0.3s ease;

  &:hover {
    background-image: url(https://banner2.cleanpng.com/lnd/20240923/rl/526393fc6e3225de29a6ef4774e303.webp);
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
       bgColor: "#ffcccb",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid",
      position: "Project Manager",
       bgColor: "#ffcccb",
      name: "SIVAPERUMAL A",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727308800&semt=ais_hybrid",
      position: "Project Manager",
       bgColor: "#ffcccb",
      name: "RAJAVEL M",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA2CIxDijGpPGTE_CVqFk1PEFOh9zq_2AI_vX-0L6qaEPqvARomVuYOZbpgss9ak7Rvk&usqp=CAU",
      position: "Project Manager",
       bgColor: "#ffcccb",
      name: "PRAKASH KANNAN",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLljN7sbq1RgM_oT85l-VSYiMZ2C_zzkLkjZ4gIV7ivI-Miu5dnZLTFQQRN2pDL0ojYpQ&usqp=CAU",
      position: "Project Manager",
       bgColor: "#ffcccb",
      name: "ARJUNA PANDI V",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
    {
      imageSrc: "https://img.freepik.com/premium-psd/3d-character-young-man-with-suit-short-hair_792170-61.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid",
      position: "Project Manager",
       bgColor: "#ffcccb",
      name: "PRABU M",
      links: [
        { url: "https://twitter.com", icon: TwitterIcon },
        { url: "https://linkedin.com", icon: LinkedinIcon },
        { url: "https://github.com", icon: GithubIcon },
      ],
    },
  ]
}) => {
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
                <CardWrapper bgColor={card.bgColor}>
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
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

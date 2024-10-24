import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";

// Styling
const Container = tw(ContainerBase)`bg-[#00354f] text-gray-100 -mx-8 px-8 py-20`;
const HeadingContainer = tw.div`mb-12`;
const Heading = tw(SectionHeading)`text-center sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white`; // Centered heading with large size
const Subheading = tw(SubheadingBase)`text-gray-100 text-center text-lg`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md text-base`;

const StatsContainer = tw.div`mt-12 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md mx-auto gap-8`;
const Stat = tw.div`flex flex-col text-center p-6 tracking-wide bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-out`;
const StatKey = tw.div`text-sm font-semibold text-gray-700 uppercase tracking-wider`;
const StatValue = tw.div`text-4xl font-extrabold text-[#00354f]`;

export default ({
  subheading = "",
  heading = "Over 1500 Projects Completed",
  description = "Explore our vast experience in handling projects. We ensure quality and efficiency with a proven track record.",
  stats = [
    {
      key: "Ongoing Projects",
      value: 400,
    },
    {
      key: "Signature Projects",
      value: 600,
    },
    {
      key: "Completed Projects",
      value: 1500,
    },
    {
      key: "Team Members",
      value: 500,
    },
  ],
}) => {
  const [currentStats, setCurrentStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Effect to increment stats when the component is visible
  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCurrentStats((prevStats) => {
            const newStats = [...prevStats];
            const incrementStep = Math.ceil(stat.value / 100);
            if (newStats[index] < stat.value) {
              newStats[index] = Math.min(newStats[index] + incrementStep, stat.value);
            }
            return newStats;
          });
        }, 50);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible, stats]);

  return (
    <div ref={sectionRef}>
      <Container>
        <ContentWithPaddingXl>
          <HeadingContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeadingContainer>
          <StatsContainer>
            {stats.map((stat, index) => (
              <Stat key={index}>
                <StatValue>{currentStats[index]}</StatValue>
                <StatKey>{stat.key}</StatKey>
              </Stat>
            ))}
          </StatsContainer>
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

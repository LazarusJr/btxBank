import React from "react";
import { Container, Video, HeroSection, Heading } from "./HeroStyling";
import bgVideo from "../../Assets/bgVideo.mp4";

const Hero = () => {
  return (
    <HeroSection>
      <Video src={bgVideo} autoPlay loop muted type="video/mp4" />
      <Container>
        <Heading>
          <h1>Welcome to the new wave of banking</h1>
        </Heading>
      </Container>
    </HeroSection>
  );
};

export default Hero;

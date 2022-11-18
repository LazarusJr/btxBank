import React from "react";
import {
  Container,
  Video,
  HeroSection,
  Heading,
  Typer,
  Span,
} from "./HeroStyling";
import bgVideo from "../../Assets/bgVideo.mp4";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Video src={bgVideo} autoPlay loop muted type="video/mp4" />
        <Heading>
          <h1>
            Welcome to the new age of <Span>banking</Span>
          </h1>
          <Typer>
            <Typewriter
              options={{
                strings: [
                  "Decentralized",
                  "Secure",
                  "Annoymousity",
                  "Powerful Community",
                ],
                delay: 100,
                deleteSpeed: 100,
                loop: true,
                pauseFor: 1500,
                autoStart: true,
              }}
            />
          </Typer>
        </Heading>
      </Container>
    </HeroSection>
  );
};

export default Hero;

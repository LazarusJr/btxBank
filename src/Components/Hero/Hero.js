import React from "react";
import {
  Container,
  Video,
  HeroSection,
  Heading,
  Typer,
  Span,
  Button,
  Arrow,
} from "../../Styles/HeroStyling";
import BgVideo from "../../Assets/bgVideo.mp4";
import Typewriter from "typewriter-effect";
import arrowIcon from "../../Assets/iconAssets/arrow.svg";

/* 

TODO:
* - change the button on the main hero section and add the glow from what ive seen on youtube.
* - after hero section can add a services section but more so need to do API for current prices of crypto to GBP/USD.
* - fix the bottom margin that is black from the page and fix the space the video is taking
*/

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Video autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </Video>
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
                  "Fast Execution Transfers",
                  "Growing Community",
                ],
                delay: 100,
                deleteSpeed: 100,
                loop: true,
                pauseFor: 1500,
                autoStart: true,
              }}
            />
          </Typer>
          <Arrow src={arrowIcon} />
        </Heading>
        {/* <Arrow src={arrowIcon} /> */}
        <Button href="/signup">Get Started today</Button>
      </Container>
    </HeroSection>
  );
};

export default Hero;

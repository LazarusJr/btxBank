import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Container = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  object-fit: contain;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 75%;
  z-index: -1;
  top: 50px;
  position: absolute;
`;

export const Heading = styled.h1`
  align-items: center;
  justify-content: center;
  h1 {
    position: relative;
    margin-top: 200px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Typer = styled.div`
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 15px;
  font-size: 20px;
`;

export const Span = styled.span`
  color: skyblue;
`;

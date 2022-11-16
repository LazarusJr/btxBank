import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  object-fit: contain;
  z-index: -1;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const Heading = styled.h1`
  text-align: center;
`;

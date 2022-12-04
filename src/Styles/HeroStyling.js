import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const HeroSection = styled.section`
  /* height: 100vh; */
  /* background-position: center;
  background-size: cover; */
  object-fit: contain;
`;

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 75%;
  z-index: -99;
  top: 100px;
  position: absolute;
  filter: brightness(35%);
`;

export const Heading = styled.div`
  align-items: center;
  align-content: center;
  display: inline-block;
  width: 100%;
  h1 {
    position: relative;
    margin-top: 200px;
    color: ${({ theme }) => theme.colors.herotext};
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Typer = styled.div`
  color: ${({ theme }) => theme.colors.herotext};
  justify-content: center;
  display: flex;
  margin-top: 15px;
  font-size: 20px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.heroHighlight};
`;

export const Button = styled.button`
  margin-top: 430px;
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  width: 160px;
  height: 40px;
  border-color: skyblue;
  background-color: transparent;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  /* text-transform: uppercase; */
  font-weight: 600;

  &:hover {
    border-color: white;
    cursor: pointer;
  }
`;

export const Arrow = styled.img`
  margin-top: 20px;
  left: calc(50% - 2%);
  left: -webkit-calc(50% - 2%);
  height: auto;
  width: 35px;
  display: flex;
  justify-content: center;
  align-self: center;
  position: absolute;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    25%,
    50%,
    75%,
    100% {
      transform: translate(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-12px);
    }
  }
`;

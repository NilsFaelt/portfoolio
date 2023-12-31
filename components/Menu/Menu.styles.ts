import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
Link;

interface Props {
  animate: string;
}
const open = keyframes`
  from {
    height: 0vh;
  }
  to {
    height: 100vh;
  }
`;
const close = keyframes`
  0% {
    height: 100vh;
    opacity: 1;
  }
  99% {
    height: 100vh;
    opacity: 0;
  }
  100%{
    height: 0vh;
  }
`;
const openLink = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
   

  }
`;
const closeLink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  95% {
    opacity: 0;
    margin-top:0
  }
  100% {
    opacity: 0;
    margin-top:-50rem;
    pointer-events:none;
    
  }
`;

export const Title = styled.h3<Props>`
  color: black;
  position: absolute;
  top: 4rem;
  opacity: ${(props) => (props.animate === "true" ? 1 : 0)};
`;

export const LinkStyledComponent = styled(Link)<Props>`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: white;
  &:hover {
    border-bottom: 0.05rem solid white;
    transition: box-shadow 0.5s;
  }

  animation: ${(props) =>
    props.animate === "true"
      ? css`
          ${openLink} 1s forwards
        `
      : css`
          ${closeLink} 1s forwards
        `};
  animation-fill-mode: forwards;
`;

export const Container = styled.nav<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 0vh;
  background-color: black;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 10px black;
  border-bottom: 0.05rem solid black;
  animation: ${(props) =>
    props.animate === "true"
      ? css`
          ${open} 2s forwards
        `
      : css`
          ${close} 1s forwards
        `};
  animation-fill-mode: forwards;
`;

import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: auto;
  height: auto;
  background-color: white;
`;
export const Tilte = styled.h2`
  position: absolute;
  top: 1rem;
  right: -6rem;
  color: white;
  border-left: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
  padding: 0.2rem;
`;
export const Span = styled.span`
  color: white;
`;

export const StyledImage = styled.img`
  width: calc(10rem + 5vw);
  border: solid white 0.05rem;
`;

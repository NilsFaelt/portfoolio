import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  cursor: pointer;
  box-sizing: border-box;
`;
export const LocationTitle = styled.h3`
  position: absolute;
  left: 1rem;
  top: 0rem;
  font-size: 1rem;
  border-left: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
  padding: 1rem;
`;

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 0.05rem white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  font-size: calc(0.5rem + 0.7vw);
  &: hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;

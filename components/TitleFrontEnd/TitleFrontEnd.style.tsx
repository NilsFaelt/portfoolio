import { keyframes, styled } from "styled-components";

const textFrontAnimation = keyframes`
  from {
   margin-left:90rem;
  }
  to {
    margin-left:0rem;
  }
`;
const hrAnimation = keyframes`
  from {
    height:10rem;
  }
  to {
    height:3rem;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 43%;
  height: 10rem;
  padding-left: 3rem;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  gap: 1rem;
  @media screen and (max-width: 500px) {
    top: 45%;
  }
`;

export const TextName = styled.p`
  position: absolute;
  top: 10rem;
  left: 5rem;
  font-size: 1rem;
  border-left: solid white 0.09rem;
  border-bottom: solid white 0.05rem;
  padding: 0.3rem;
  @media screen and (max-width: 500px) {
    top: 5rem;
  }
`;
export const TextFront = styled.h2`
  font-size: calc(1rem + 2vw);
  animation: ${textFrontAnimation} 1s forwards;
`;
export const TextEnd = styled.h2`
  font-size: calc(1rem + 2vw);
`;
export const TextDeveloper = styled.h2`
  font-size: calc(1rem + 2vw);
`;
export const HrOne = styled.hr`
  background-color: red;
  animation: ${hrAnimation} 3s forwards;
  @media screen and (max-width: 500px) {
  }
`;
export const HrTwo = styled.hr`
  height: calc(3rem + 4vw);
  background-color: yellow;
  @media screen and (max-width: 500px) {
  }
`;
export const HrThree = styled.hr`
  height: calc(2rem + 4vw);
  background-color: blue;
  @media screen and (max-width: 500px) {
  }
`;

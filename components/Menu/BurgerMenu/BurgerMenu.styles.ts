import styled, { css, keyframes } from "styled-components";

interface Props {
  animate: string;
}

const rotate360 = keyframes`

  to {
    transform: rotate(360deg);
  }
`;

export const BarOne = styled.div<{ $animate: string }>`
  background-color: white;
  width: 2.5rem;
  height: 0.15rem;
  border: 0.05rem solid white;
  border-radius: 1rem;
  animation: ${(props) =>
    props.$animate === "true"
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
`;
export const BarTwo = styled.div<{ $animate: string }>`
  background-color: white;
  width: 2.5rem;
  height: 0.15rem;
  border: 0.05rem solid white;
  border-radius: 1rem;
  animation: ${(props) =>
    props.$animate === "true"
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
  animation-delay: 0.2s;
`;
export const BarThree = styled.div<{ $animate: string }>`
  background-color: white;
  width: 2.5rem;
  height: 0.15rem;
  border: 0.05rem solid white;
  border-radius: 1rem;
  animation: ${(props) =>
    props.$animate === "true"
      ? css`
          ${rotate360} 0.5s forwards
        `
      : "none"};
  animation-delay: 0.4s;
`;
export const Container = styled.div`
  z-index: 3;
  position: absolute;
  right: 2.5rem;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 3rem;
  height: 5rem;
  cursor: pointer;
  &:hover ${BarOne}, &:hover ${BarTwo}, &:hover ${BarThree} {
    transition: box-shadow 0.5s ease;
  }

  ${BarOne}, ${BarTwo}, ${BarThree} {
    transition: box-shadow 0.3s ease-in-out;
  }
  @media (max-width: 400px) {
    right: 1rem;
  }
`;

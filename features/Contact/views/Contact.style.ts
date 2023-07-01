import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  padding-top: 15rem;
`;

export const Text = styled.div`
  width: clamp(15rem, 30rem, 70vw);
  color: white;
  padding: 2rem;
  border-left: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
`;
export const Span = styled.span`
  color: white;
  font-size: 1.4rem;
  font-weight: bolder;
`;

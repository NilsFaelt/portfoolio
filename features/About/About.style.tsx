import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
  padding-top: 5rem;
`;
export const InfoTextWrapper = styled.div`
  width: 100vw;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.div`
  width: clamp(15rem, 30rem, 70vw);
  color: white;
  padding: 1rem;
  border-left: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
`;
export const Span = styled.span`
  color: white;
  font-size: 1.4rem;
  font-weight: bolder;
`;

import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: clamp(20rem, 80vw, 35rem);
  height: auto;
  border: solid white 0.05rem;
  background-color: white;
  @media (max-width: 400px) {
    width: 95vw;
  }
`;
export const InnerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  border-right: solid black 0.05rem;
`;
export const InnerRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const InnerRightUpperContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border-bottom: solid black 0.05rem;
`;
export const InnerRightLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Title = styled.h3`
  color: black;
  font-size: calc(0.7rem + 0.5vw);
  margin-left: 1rem;
`;
export const Text = styled.p`
  color: black;
  font-size: calc(0.7rem + 0.3vw);
  margin-left: 1rem;
`;
export const UrlLink = styled.a`
  color: black;
  font-size: calc(0.7rem + 0.3vw);
  margin-left: 0.5rem;
`;

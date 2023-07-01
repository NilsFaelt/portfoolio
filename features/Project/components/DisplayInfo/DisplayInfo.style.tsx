import { keyframes, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: clamp(20rem, 80vw, 35rem);
  height: auto;
  border: solid black 0.05rem;
  background-color: black;
  @media (max-width: 400px) {
    width: 90vw;
  }
`;
export const InnerLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  border-right: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
  padding-bottom: 1rem;
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
  padding-left: 1rem;
  border-bottom: solid white 0.05rem;
`;
export const InnerRightLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Title = styled.h3`
  color: white;
  font-size: calc(0.7rem + 0.5vw);
  margin-left: 1rem;
  padding-top: 1rem;
  @media (max-width: 400px) {
    margin-left: 0rem;
  }
`;
export const Text = styled.p`
  color: white;
  font-size: calc(0.7rem + 0.3vw);
  margin-left: 1rem;
`;
export const UrlLink = styled.a`
  color: white;
  font-size: calc(0.7rem + 0.3vw);

  border: solid 0.05rem white;
  padding: 1rem;
  text-decoration: none;
  &: hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
  @media (max-width: 400px) {
    margin-left: -1rem;
  }
`;

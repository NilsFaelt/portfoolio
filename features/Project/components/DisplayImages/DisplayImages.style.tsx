import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: solid white 0.05rem;
  background-color: white;
  width: clamp(20rem, 80vw, 35rem);
  height: 25rem;
  @media (max-width: 400px) {
    width: 95vw;
  }
`;
export const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

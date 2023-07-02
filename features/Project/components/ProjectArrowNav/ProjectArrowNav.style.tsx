import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: clamp(20rem, 80vw, 35rem);

  @media (max-width: 400px) {
    width: 95vw;
  }
`;

export const Button = styled.button`
  color: white;
  font-size: calc(0.7rem + 0.3vw);
  border: solid 0.05rem white;
  padding: 1rem;
  text-decoration: none;
  background-color: black;
  cursor: pointer;
  width: 7rem;
  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;

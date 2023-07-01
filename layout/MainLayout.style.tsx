import { styled } from "styled-components";
export const Container = styled.div`
  position: relative;
`;

export const Header = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
export const LocationTitle = styled.h3`
  margin-left: 1rem;
  font-size: 1rem;
  border-left: solid white 0.05rem;
  border-bottom: solid white 0.05rem;
  padding: 1rem;
  display: inline-block;
`;

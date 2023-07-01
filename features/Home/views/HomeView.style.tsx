import { styled } from "styled-components";

export const Container = styled.main`
  overflow-x: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

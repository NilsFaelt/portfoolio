import React, { FC } from "react";
import { Container, Tilte, StyledImage, Span } from "./InfoContainer.style";

export const InfoContainer: FC = ({}) => {
  return (
    <Container>
      <StyledImage src='/me.jpg' />
      <Tilte>
        <Span>AB</Span> OUT ME
      </Tilte>
    </Container>
  );
};

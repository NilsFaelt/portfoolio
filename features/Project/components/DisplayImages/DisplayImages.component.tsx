import React, { FC } from "react";
import { Container, GridImage } from "./DisplayImages.style";

export const DisplayImages: FC<{ title: string }> = ({ title }) => {
  const render = [1, 2, 3, 4];
  return (
    <Container>
      {render.map((each) => {
        return <GridImage key={each} src={`/projects/${title}/${each}.png`} />;
      })}
    </Container>
  );
};

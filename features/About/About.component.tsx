import React, { FC } from "react";
import { Container, InfoTextWrapper, Span, Text } from "./About.style";
import { InfoContainer } from "./components";

export const About: FC = () => {
  return (
    <Container>
      <InfoTextWrapper></InfoTextWrapper>
      <Text>
        {" "}
        <Span>ABOUTME</Span> <br /> I&apos;M A FRONT-END DEVELOPER WITH A
        PASSION FOR DESIGN AND A CONSTANT HUNT FOR NEW SOLUTIONS OUTSIDE OF THE
        BOX. <br />
        MY FOUNDATION COMES FROM THE FRONT-END, BUT WITH A CONSTANT HUNGER FOR
        LEARNING MORE, I SOON REALIZED I HAD TO DIVE INTO THE WORLD OF BACKENDS
        AND DATABASES. THERE IS NO SUCH THING AS AN UNSOLVABLE PROBLEM FOR ME.
        <br /> IF THERE IS NO WAY TO SOLVE IT, I CREATE A WAY TO SOLVE IT.
      </Text>
    </Container>
  );
};

import React, { FC } from "react";
import {
  Container,
  TextEnd,
  TextFront,
  TextDeveloper,
  HrOne,
  HrTwo,
  HrThree,
  TextName,
} from "./TitleFrontEnd.style";

export const TitleFrontEnd: FC = () => {
  return (
    <Container>
      <TextFront>FRONT</TextFront>
      <TextEnd>END</TextEnd>
      <TextDeveloper>DEVELOPER</TextDeveloper>
      <HrOne />
      <HrTwo />
      <HrThree />
      <TextName>NILS FÄLT</TextName>
    </Container>
  );
};

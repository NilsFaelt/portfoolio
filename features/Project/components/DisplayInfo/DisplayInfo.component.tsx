import React, { FC } from "react";
import {
  Container,
  InnerLeftContainer,
  InnerRightContainer,
  InnerRightLowerContainer,
  InnerRightUpperContainer,
  Title,
  Text,
  UrlLink,
} from "./DisplayInfo.style";
import { projectData } from "@/data";

interface Props {
  title: string;
}

export const DisplayInfo: FC<Props> = ({ title }) => {
  const data = projectData.find((each) => each.title === title);
  if (data === undefined) return null;
  const { description, href, stack } = data;
  return (
    <Container>
      <InnerLeftContainer>
        <Title>{title}</Title>
        <Text>
          URL:{" "}
          <UrlLink target='blank' href={href}>
            CLICK ME
          </UrlLink>
        </Text>
      </InnerLeftContainer>
      <InnerRightContainer>
        <InnerRightUpperContainer>
          <Text>{description}</Text>{" "}
        </InnerRightUpperContainer>
        <InnerRightLowerContainer>
          {" "}
          <Text>{stack}</Text>{" "}
        </InnerRightLowerContainer>
      </InnerRightContainer>
    </Container>
  );
};

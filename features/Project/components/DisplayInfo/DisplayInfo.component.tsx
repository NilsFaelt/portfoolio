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
          {href ? (
            <UrlLink target='blank' href={href}>
              VISIT WEBSITE
            </UrlLink>
          ) : (
            "NOT YET"
          )}
        </Text>
      </InnerLeftContainer>
      <InnerRightContainer>
        <InnerRightUpperContainer>
          <Text>{description.toUpperCase()}</Text>{" "}
        </InnerRightUpperContainer>
        <InnerRightLowerContainer>
          {" "}
          <Text>{stack.toUpperCase()}</Text>{" "}
        </InnerRightLowerContainer>
      </InnerRightContainer>
    </Container>
  );
};

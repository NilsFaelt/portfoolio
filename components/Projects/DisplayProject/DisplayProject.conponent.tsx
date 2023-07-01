import React, { FC } from "react";
import { Container, LocationTitle, Title } from "./DisplayProject.style";
import Link from "next/link";

interface Props {
  projectNameUrl: string;
  url: string;
  title: string;
}

export const DisplayProject: FC<Props> = ({ projectNameUrl, url, title }) => {
  return (
    <Link style={{ color: "white" }} href={`project/${projectNameUrl}`}>
      <Container url={url}>
        <Title>{title}</Title>
      </Container>
    </Link>
  );
};

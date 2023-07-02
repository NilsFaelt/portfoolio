import React, { FC } from "react";
import { Container, Button } from "./ProjectArrowNav.style";
import { projectData } from "@/data";
import { useRouter } from "next/router";

interface Props {
  title: string;
}

export const ProjectArrowNav: FC<Props> = ({ title }) => {
  const router = useRouter();
  let index = projectData.findIndex((each) => each.title === title);
  const handleClickNext = () => {
    console.log(index);
    if (projectData.length === index + 1)
      router.push(`/project/${projectData[0].title.toLowerCase()}`);
    else router.push(`/project/${projectData[index + 1].title.toLowerCase()}`);
  };
  const handleClickPrev = () => {
    console.log(index);
    if (index === 0)
      router.push(
        `/project/${projectData[projectData.length - 1].title.toLowerCase()}`
      );
    else router.push(`/project/${projectData[index - 1].title.toLowerCase()}`);
  };
  return (
    <Container>
      <Button onClick={() => handleClickPrev()}>PREV</Button>
      <Button onClick={() => handleClickNext()}>NEXT</Button>
    </Container>
  );
};

export default ProjectArrowNav;

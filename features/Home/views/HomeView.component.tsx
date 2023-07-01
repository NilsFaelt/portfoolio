import { DisplayProject } from "@/components/Projects";
import MainLayout from "@/layout/MainLayout";
import React, { FC } from "react";
import { Container } from "./HomeView.style";
import { projectData } from "@/data";

export const HomeView: FC = () => {
  return (
    <MainLayout>
      <Container>
        {projectData.map((each) => {
          return (
            <DisplayProject
              key={each.title}
              projectNameUrl={each.title.toLocaleLowerCase()}
              title={each.title}
            />
          );
        })}
      </Container>
    </MainLayout>
  );
};

export default HomeView;

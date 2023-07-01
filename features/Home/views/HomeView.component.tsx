import { DisplayProject } from "@/components/Projects";
import MainLayout from "@/layout/MainLayout";
import React, { FC } from "react";
import { Container } from "./HomeView.style";

export const HomeView: FC = () => {
  return (
    <MainLayout>
      <Container>
        <DisplayProject
          projectNameUrl={"fango-solutions"}
          title='FANGO SOLUTIONS'
          url='/projects/fango.png'
        />
        <DisplayProject
          projectNameUrl={"laundry-app"}
          title='LAUNDRY APP'
          url='/projects/laundry.png'
        />
        <DisplayProject
          projectNameUrl={"skeidar"}
          title='SKEIDAR'
          url='/projects/skeidar.png'
        />
      </Container>
    </MainLayout>
  );
};

export default HomeView;

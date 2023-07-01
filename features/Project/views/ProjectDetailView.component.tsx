import MainLayout from "@/layout/MainLayout";
import React, { FC } from "react";
import { DisplayInfo } from "../components";
import { Container } from "./ProjectDetailView.style";
import { useRouter } from "next/router";

export const ProjectDetailView: FC = () => {
  const router = useRouter();
  const title = router.query.name;
  if (typeof title !== "string") return null;
  return (
    <MainLayout>
      <Container>
        <DisplayInfo title={title.toUpperCase()} />
      </Container>
    </MainLayout>
  );
};

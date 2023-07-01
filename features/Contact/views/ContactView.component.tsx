import MainLayout from "@/layout/MainLayout";
import React, { FC } from "react";
import { Container, Text, Span } from "./Contact.style";

export const ContactView: FC = () => {
  return (
    <MainLayout>
      <Container>
        <Text>
          <Span>CONTACT</Span> <br />
          <br />
          PHONE: <br /> 004676-0698660 <br />
          <br />
          MAIL: <br />
          <a style={{ color: "white" }} href='mailto:your-email@example.com'>
            NILS.FAELT@GMAIL.COM
          </a>
        </Text>
      </Container>
    </MainLayout>
  );
};

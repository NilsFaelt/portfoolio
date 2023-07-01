import React, { FC, useState } from "react";
import { Container, LinkStyledComponent, Title } from "./Menu.styles";

interface test {}
interface Props {
  toogleMenu: boolean;
  setToogleDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: FC<Props> = ({ toogleMenu, setToogleDropDownMenu }) => {
  return (
    <Container animate={toogleMenu ? "true" : "false"}>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/home"}
      >
        HOME
      </LinkStyledComponent>

      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/about"}
      >
        ABOUT
      </LinkStyledComponent>
      <LinkStyledComponent
        onClick={() => {
          setToogleDropDownMenu(false);
        }}
        animate={toogleMenu ? "true" : "false"}
        href={"/contact"}
      >
        CONTACT{" "}
      </LinkStyledComponent>
    </Container>
  );
};

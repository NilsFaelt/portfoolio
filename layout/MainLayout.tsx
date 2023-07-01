import { BurgerMenu, Menu } from "@/components/Menu";
import React, { FC, ReactNode, useState } from "react";
import { Header, LocationTitle, Container } from "./MainLayout.style";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const pageLocation = router.pathname;
  const lastPartOfUrl = pageLocation.split("/").pop();
  const projectName = router.query.name;
  const displayedLocationTitle =
    typeof projectName === "string"
      ? projectName.toUpperCase()
      : lastPartOfUrl?.toUpperCase();
  const [firstToogle, setFirstToogle] = useState(false);
  const [toogleMenu, setToogleMenu] = useState(false);
  const [toogleBurger, setToogleburger] = useState(false);
  return (
    <Container>
      <Header>
        <Link style={{ color: "white" }} href={"/home"}>
          <LocationTitle>{displayedLocationTitle}</LocationTitle>
        </Link>
        <BurgerMenu
          setFirstToogle={setFirstToogle}
          toogleDropDownMenu={toogleMenu}
          setToogleburger={setToogleburger}
          toogleBurger={toogleBurger}
          setToogleDropDownMenu={setToogleMenu}
        />
        {firstToogle && (
          <Menu toogleMenu={toogleMenu} setToogleDropDownMenu={setToogleMenu} />
        )}
      </Header>
      {children}
    </Container>
  );
};

export default MainLayout;

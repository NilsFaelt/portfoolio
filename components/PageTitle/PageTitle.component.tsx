import React, { FC } from "react";
import { Title } from "./PageTitle.style";

export const PageTitle: FC<{ text: string }> = ({ text }) => {
  return <Title>{text}</Title>;
};

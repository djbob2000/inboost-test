import React from "react";
import { Info } from "../Info/Info";
import { DropdownList } from "../DropdownList/DropdownList";
import * as STC from "./Box.styled";

export const Box: React.FC = () => {
  return (
    <>
      <STC.Wrapper>
        <Info />
        <DropdownList />
      </STC.Wrapper>
    </>
  );
};


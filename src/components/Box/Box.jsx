import React from "react";
import { Info } from "../Info/Info";
import { DropdownList } from "../DropdownList/DropdownList";

import * as STC from "./Box.styled";

export const Box = () => {
  return (
    <>
      <STC.Wrapper>
        <Info />
        <DropdownList />
      </STC.Wrapper>
    </>
  );
};

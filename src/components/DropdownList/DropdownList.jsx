import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectVariants } from "../../redux/selectors";
import icon from "../../assets/icons/sprite.svg";
import * as STC from "./DropdownList.styled";
import { DropdownItem } from "../DropdownItem/DropdownItem";

export const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState("Select variants");
  const variants = useSelector(selectVariants);

  const handleVariantSelect = () => {
    console.log("DropdownList onChange");
  };

  return (
    <STC.DropdownContainer isOpen={isOpen}>
      <STC.Wrap>
        <STC.SelectedText>{selectedText}</STC.SelectedText>
        <STC.Svg
          className="dropdown-toggle"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? (
            <use href={`${icon}#arrow-up`} />
          ) : (
            <use href={`${icon}#arrow-down`} />
          )}
        </STC.Svg>
      </STC.Wrap>

      {isOpen &&
        variants.map((variant) => (
          <DropdownItem key={variant.id} variant={variant} />
        ))}
    </STC.DropdownContainer>
  );
};

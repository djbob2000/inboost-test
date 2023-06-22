import React from "react";
import * as STC from "./DropdownItem.styled";
import icon from "../../assets/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addSelected } from "../../redux/variants/variants.slice";
import { selectSelectedID } from "../../redux/selectors";

export const DropdownItem = ({ variant }) => {
  const selectedID = useSelector(selectSelectedID);
  console.log(
    "🚀 ~ file: DropdownItem.jsx:10 ~ DropdownItem ~ selectedID:",
    selectedID
  );

  const dispatch = useDispatch();
  const handleVariantSelect = () => {
    console.log("Variant klick");
    dispatch(addSelected(variant.id));
  };

  return (
    <>
      <STC.Wrap onClick={() => handleVariantSelect(variant)}>
        <STC.Svg>
          {!selectedID.includes(variant.id) ? (
            <use href={`${icon}#checkbox`} />
          ) : (
            <use href={`${icon}#checkboxSelected`} />
          )}
        </STC.Svg>
        {variant.name}
      </STC.Wrap>
    </>
  );
};

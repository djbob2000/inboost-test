import React from 'react';
import * as STC from './DropdownItem.styled';
import icon from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { toggleSelected } from '../../redux/variants/variants.slice';

export const DropdownItem = ({ variant, selectedID }) => {
  const dispatch = useDispatch();

  const handleVariantSelect = () => {
    dispatch(toggleSelected(variant.id));
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

import React from 'react';
import * as STC from './DropdownItem.styled';
import icon from '../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { toggleSelected } from '../../redux/variants/variants.slice';

interface DropdownItemProps {
  variant: {
    id: number;
    name: string;
  },
  selectedID: number[]
}


export const DropdownItem: React.FC<DropdownItemProps> = ({ variant, selectedID }) => {
  const dispatch = useDispatch();

  const handleVariantSelect = () => {
    dispatch(toggleSelected(variant.id));
  };

  return (
    <>
      <STC.Wrap onClick={() => handleVariantSelect()}>
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
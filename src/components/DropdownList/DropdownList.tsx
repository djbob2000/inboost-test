import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectVariants, selectSelectedID } from '../../redux/selectors';
import icon from '../../assets/icons/sprite.svg';
import * as STC from './DropdownList.styled';
import { DropdownItem } from '../DropdownItem/DropdownItem';

interface Variant {
  id: number;
  name: string;
}

export const DropdownList: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants: Variant[] = useSelector(selectVariants).map((variant: string) => {
    const parsedVariant: Variant = JSON.parse(variant);
    return {
      id: parsedVariant.id,
      name: parsedVariant.name,
    };
  });
  const selectedID: number[] = [useSelector(selectSelectedID)];

  const selectedText = selectedID.join('-');

  return (
    <STC.DropdownContainer isOpen={isOpen}>
      <STC.Wrap>
        <STC.SelectedText>
          {selectedText ? `Варіант ${selectedText}` : 'Вибрати значення'}
        </STC.SelectedText>
        <STC.Svg
          className="dropdown-toggle"
          onClick={() => {
            setIsOpen(prev => !prev);
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
        variants.map(variant => (
          <DropdownItem
            key={variant.id}
            variant={variant}
            selectedID={selectedID}
          />
        ))}
    </STC.DropdownContainer>
  );
};

import styled from 'styled-components';

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
export const DropdownContainer = styled.div`
  min-width: 233px;
  position: absolute;

  border-radius: 4px;
  border: 0.658px solid var(--green-400, #479f76);
  border: ${({ isOpen }) =>
    isOpen ? '1px solid #EAF2FF' : '0.658px solid var(--green-400, #479f76)'};
  background: var(--gray-white, #fff);
`;

export const Wrap = styled.div`
  padding: 0 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedText = styled.span`
  color: var(--body-color, #37352f);
  font-size: 14px;
  font-family: IBM Plex Sans;
  line-height: 1.7;
`;

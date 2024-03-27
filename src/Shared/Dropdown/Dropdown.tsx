import { FC, PropsWithChildren } from 'react';
import { Window } from './Dropdown.styled';
import styled from 'styled-components';

interface DropdownProps extends PropsWithChildren{
  isOpen: boolean
}

export const List = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Block = styled.li`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  gap: 12px;
`;

export const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const City = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const Country = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #babbc7;
`;

export const Dropdown: FC<DropdownProps> = ({ isOpen, children }) => {

  return (
    <Window isOpen={isOpen} onClick={e => e.stopPropagation()}>
      {children}
    </Window>
  );
};

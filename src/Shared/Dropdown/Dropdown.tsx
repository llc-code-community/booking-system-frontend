import { FC } from 'react';
import styled from 'styled-components';

import PlaceSvg from '@/assets/svg/Place.svg';

interface DropdownProps {
  title?: string;
  items: Array<ItemsTypes>;
  isOpen: boolean;
}

type ItemsTypes = {
  city: string;
  country: string;
  id: number | string;
};

export const Window = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 24px;
  border-radius: 36px;
  width: 500px;
  box-shadow: 0px 2px 12px 2px rgba(178, 178, 178, 0.25);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ${props => props.theme.cubicBezier};
`;
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

export const Dropdown: FC<DropdownProps> = ({ title, items, isOpen }) => {
  const renderItems = (): JSX.Element[] => {
    return items.map(item => (
      <Block key={item.id}>
        <PlaceSvg />
        <Info>
          <City>{item.city}</City>
          <Country>{item.country}</Country>
        </Info>
      </Block>
    ));
  };
  return (
    <Window isOpen={isOpen}>
      {title && <Title>{title}</Title>}
      <List>{renderItems()}</List>
    </Window>
  );
};

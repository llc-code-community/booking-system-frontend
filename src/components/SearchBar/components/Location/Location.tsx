import { ButtonInner, Text, TextInner  } from '../../SearchBar.styled';
import { useDropdown } from '../../hooks/useDropdown';

import { Block, City, Country, Info, List, Title } from './Location.styled';
import PlaceSvg from '@/assets/svg/Place.svg';
import { LocationProps } from '../../types/Location';
import { Dropdown } from '@/Shared';

export const Location = ({ items }: LocationProps) => {
  const dropdown = useDropdown(false);

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
    <div style={{ position: 'relative' }}>
      {' '}
      <Title>Location</Title>
      <ButtonInner onClick={() => dropdown.setIsOpen(prev => !prev)}>
        <TextInner>
          <PlaceSvg />
          <Text>Where would you like to go?</Text>
        </TextInner>
      </ButtonInner>
      <Dropdown isOpen={dropdown.isOpen}>
        <div style={{width:"420px"}}>
          <Title>Popular destinations</Title>
          <List>{renderItems()}</List>
        </div>
      </Dropdown>
    </div>
  );
};

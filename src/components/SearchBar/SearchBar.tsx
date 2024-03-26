import { useState } from 'react';

import { DateBlock, Inner, Text, TextInner, Title } from './SearchBar.styled';
import { Button, Dropdown } from '@/Shared';
import CoinSvg from '@/assets/svg/Coin.svg';
import DataPikerSvg from '@/assets/svg/Datapiker.svg';
import PlaceSvg from '@/assets/svg/Place.svg';
import SearchSvg from '@/assets/svg/Search.svg';

const items = [
  { city: 'Dubai', country: 'Dubai, United Arab Amirates', id: 1 },
  { city: 'Istanbul', country: 'Istanbul, Turkiye', id: 2 },
  { city: 'Vilnius', country: 'Vilnius, Lithuania', id: 3 },
  { city: 'Vilnius', country: 'Vilnius, Lithuania', id: 4 },
  { city: 'Paris', country: 'France', id: 5 },
  { city: 'Alanya', country: 'Alanya Region, Turkiye', id: 6 },
  { city: 'Berlin', country: 'Germany', id: 7 },
];

export const SearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Inner>
      <div style={{ position: 'relative' }}>
        {' '}
        <Title>Location</Title>
        <button onClick={() => setDropdownOpen(prev => !prev)}>
          <TextInner>
            <PlaceSvg />
            <Text>Where would you like to go?</Text>
          </TextInner>
        </button>
        <Dropdown items={items} title="Popular destinations" isOpen={dropdownOpen} />
      </div>
      <DateBlock>
        {' '}
        <div>
          <Title>Check in</Title>
          <TextInner right>
            <DataPikerSvg />
            <Text>Add dates</Text>
          </TextInner>
        </div>
        <div>
          <Title>Check out</Title>
          <TextInner>
            <DataPikerSvg />
            <Text>Add dates</Text>
          </TextInner>
        </div>
      </DateBlock>
      <div>
        {' '}
        <Title>Person</Title>
        <TextInner>
          <Text color="#000">2 adults, 0 children, 1 room</Text>
        </TextInner>
      </div>
      <div>
        {' '}
        <Title>Price range</Title>
        <TextInner right>
          <CoinSvg />
          <Text>Min</Text>
        </TextInner>
        <TextInner>
          <CoinSvg />
          <Text>Max</Text>
        </TextInner>
      </div>
      <Button>
        <span style={{ display: 'flex' }}>
          <SearchSvg /> Search
        </span>
      </Button>
    </Inner>
  );
};

import {Inner, Text, TextInner, Title } from './SearchBar.styled';
import { Button } from '@/Shared';
import CoinSvg from '@/assets/svg/Coin.svg';

import SearchSvg from '@/assets/svg/Search.svg';
import { Location } from './components/Location/Location';
import { Person } from './components/Person/Person';
import { LocationTypes } from './types/Location';
import { DataCheck } from './components/DataCheck/DataCheck';

const items: Array<LocationTypes> = [
  { city: 'Dubai', country: 'Dubai, United Arab Amirates', id: 1 },
  { city: 'Istanbul', country: 'Istanbul, Turkiye', id: 2 },
  { city: 'Vilnius', country: 'Vilnius, Lithuania', id: 3 },
  { city: 'Paris', country: 'France', id: 4 },
  { city: 'Alanya', country: 'Alanya Region, Turkiye', id: 5 },
  { city: 'Berlin', country: 'Germany', id: 6 },
]

export const SearchBar = () => {

  return (
    <Inner>
      <Location items={items} />
      <DataCheck />
      <Person />
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

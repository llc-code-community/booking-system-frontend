import { Inner, Text, TextInner, Title } from './SearchBar.styled';

import { Button } from '@/Shared';

import PlaceSvg from '@/assets/svg/Place.svg';
import SearchSvg from '@/assets/svg/Search.svg';

export const SearchBar = () => {
  return (
    <Inner>
      <div>
        {' '}
        <Title>Location</Title>
        <TextInner>
          <PlaceSvg />
          <Text>Where would you like to go?</Text>
        </TextInner>
      </div>
      <div>
        {' '}
        <Title>Check in</Title> <Title>Check out</Title>
      </div>
      <div>
        {' '}
        <Title>Person</Title>
        <TextInner>
          <Text>2 adults, 0 children, 1 room</Text>
        </TextInner>
      </div>
      <div>
        {' '}
        <Title>Price range</Title>
        <TextInner>
          <Text>Where would you like to go?</Text>
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

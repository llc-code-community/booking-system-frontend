import { Container, SearchIcon, Subtitle, Tag, TagInner, Title } from './Home.styled';

// import { Dropdown } from '@/components/Shared';
import { SearchBar } from '@/components';

import SearchSvg from '@/assets/svg/Search.svg';

// const items = [
//   { city: 'Dubai', country: 'Dubai, United Arab Amirates' },
//   { city: 'Istanbul', country: 'Istanbul, Turkiye' },
//   { city: 'Vilnius', country: '' },
//   { city: 'Vilnius', country: 'Vilnius, Lithuania' },
//   { city: 'Paris', country: 'France' },
//   { city: 'Alanya', country: 'Alanya Region, Turkiye' },
//   { city: 'Berlin', country: 'Germany' },
// ];

export const HomePage = () => {
  return (
    <Container>
      <TagInner>
        <Tag>3500+ hotels</Tag>
      </TagInner>
      <Title>
        {' '}
        <p>New search</p>
        <SearchIcon>
          <SearchSvg />
        </SearchIcon>
        <p>experience</p>
      </Title>
      <h1></h1>
      <Subtitle>We will find the best options for you</Subtitle>

      <SearchBar />
      {/* <Dropdown items={items}/> */}
    </Container>
  );
};

import { ButtonInner, Text, TextInner, Title } from '../../SearchBar.styled';
import { useCount } from '../../hooks/useCount';
import { useDropdown } from '../../hooks/useDropdown';

import { ButtonsBlock, CircleBtn, Row } from './Person.styled';
import { Dropdown } from '@/Shared';

const CountNames = [{ title: 'Adults' }, { title: 'Children' }, { title: 'Rooms' }];

export const Person = () => {
  const dropdown = useDropdown(false);

  const { count, setCount, ValidateMax, ValidateMin } = useCount();

  return (
    <div style={{ position: 'relative' }}>
      {' '}
      <Title>Person</Title>
      <ButtonInner onClick={() => dropdown.setIsOpen(prev => !prev)}>
        <TextInner>
          <Text color="#000">2 adults, 0 children, 1 room</Text>
        </TextInner>
        <Dropdown isOpen={dropdown.isOpen}>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              width: '300px',
              paddingInline: '24px',
            }}
          >
            {CountNames.map(item => (
              <Row key={item.title}>
                <p>{item.title}</p>
                <ButtonsBlock>
                  <CircleBtn onClick={() => setCount(prev => prev - 1)} disabled={ValidateMin(0)}>
                    -
                  </CircleBtn>
                  <span>{count}</span>
                  <CircleBtn onClick={() => setCount(prev => prev + 1)} disabled={ValidateMax(10)}>
                    +
                  </CircleBtn>
                </ButtonsBlock>
              </Row>
            ))}
          </ul>
        </Dropdown>
      </ButtonInner>
    </div>
  );
};

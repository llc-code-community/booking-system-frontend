import styled from 'styled-components';

export const Tag = styled.span`
  font-size: 14px;
  padding: 8px;
  border-radius: 36px;
  color: ${props => props.theme.TritiaryColorBlue};
  background-color: ${props => props.theme.SecondaryButtonBlue};
`;
export const TagInner = styled.div`
  width:100%;
  text-align:center;
  margin-top: 64px;
  margin-bottom: 32px;
`;
export const Title = styled.h1`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content:center;
  font-size: 88px;
  font-weight: 300;
  margin-bottom: 32px;
`;
export const SearchIcon = styled.span`
  border: 1px solid #6950fb;
  border-radius: 50%;
  padding: 20px;
`;

export const Subtitle = styled.div`
  font-size: 27px;
  font-weight: 300;
  margin-bottom: 64px;
  text-align:center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 15px;
`;

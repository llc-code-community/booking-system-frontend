// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

export const Dropdown = styled.div`
  display: fixed;
  background-color: #fff;
  opacity: 100%;
  inset: 0px;
  transition: opacity 150ms ${props => props.theme.cubicBezier};
`;

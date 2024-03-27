import styled from 'styled-components';


 export const Window = styled.div<{ isOpen: boolean }>`
 position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding-block: 24px;
  border-radius: 36px;
  box-shadow: 0px 2px 12px 2px rgba(178, 178, 178, 0.25);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ${props => props.theme.cubicBezier};
`;
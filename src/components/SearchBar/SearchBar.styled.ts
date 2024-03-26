import styled from 'styled-components';

export const Inner = styled.div`
  border-radius: 100px;
  border: 1px solid #babbc7;
  padding: 16px 16px 16px 32px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 400;
`;

export const TextInner = styled.p<{ right?: boolean }>`
  display: flex;
  gap: 17px;
  align-items: center;
  padding-right: ${props => props.right && '8px'};
  border-right: ${props => props.right && '1px solid #babbc7;'};
`;

export const Text = styled.span<{ color?: string }>`
  color: ${props => (props.color ? props.color : '#bdbdbd')};
  font-size: 16px;
  font-weight: 400;
`;
export const DateBlock = styled.div`
  display: flex;
  gap: 8px;
`;

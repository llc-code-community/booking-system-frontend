import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const Block = styled.li`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  gap: 12px;
  padding-block:4px;
  padding-inline:24px;
  cursor: pointer;
  transition: background-color .1s linear;

  &:hover {
    background-color:#F4F4F4;
  }
`;

export const Title = styled.h4`
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 400;
  padding-inline:24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const City = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const Country = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #babbc7;
`;
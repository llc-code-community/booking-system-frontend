import { DateBlock, Text, TextInner, Title } from "../../SearchBar.styled";
import DataPikerSvg from '@/assets/svg/Datapiker.svg';

export const DataCheck = () => {
  return (
    <DateBlock>
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
  );
};

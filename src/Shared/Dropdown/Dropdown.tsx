import { FC } from 'react';

interface DropdownProps {
  title: string;
  items: Array<ItemsTypes>;
}

 type ItemsTypes = {
  city: string;
  country: string;
}

export const Dropdown: FC<DropdownProps> = ({ title, items }) => {
  const renderItems = (): JSX.Element[] => {
    return items.map(item => <li>{item.city}</li>);
  };
  return (
    <div>
      <h2>{title}</h2>
      <ul>{renderItems()}</ul>
    </div>
  );
};

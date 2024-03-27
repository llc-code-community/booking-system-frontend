import { useState } from 'react';

export const useCount = (num: number = 0) => {
  const [count, setCount] = useState(num);

  const ValidateMin = (min: number) => {
    if (count === min) return true;
  };
  const ValidateMax = (max: number) => {
    if (count === max) return true;
  };

  return {
    count,
    setCount,
    ValidateMin,
    ValidateMax,
  };
};

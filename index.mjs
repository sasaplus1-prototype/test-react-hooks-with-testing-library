import { useState } from 'react';

export function useCounter(defaultValue = 0) {
  const [count, setCount] = useState(defaultValue);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return {
    count,
    decrement,
    increment,
  };
}

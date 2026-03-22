import { useState, useEffect } from "react";

type useDebounceType = {
  value: string;
  delay: number;
};

export const useDebounce = ({ value, delay }: useDebounceType) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

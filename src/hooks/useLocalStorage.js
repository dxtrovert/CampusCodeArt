import { useCallback, useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored === null ? initialValue : JSON.parse(stored);
    } catch (error) {
      console.error(`Unable to read localStorage key "${key}".`, error);
      return initialValue;
    }
  });

  const updateValue = useCallback((nextValue) => {
    setValue((currentValue) => {
      const valueToStore = nextValue instanceof Function ? nextValue(currentValue) : nextValue;
      try {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Unable to save localStorage key "${key}".`, error);
      }
      return valueToStore;
    });
  }, [key]);

  return [value, updateValue];
}

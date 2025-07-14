'use client';
import { useState, useEffect } from 'react';

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const isClient = typeof window === 'object';

  const [state, setState] = useState<T>(() => {
    if (isClient) {
      try {
        const storedValue = window.localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      } catch (error) {
        console.error('Error reading from local storage:', error);
      }
    }
    return initialValue;
  });

  const setValue = (value: T | ((prevState: T) => T)) => {
    if (isClient) {
      try {
        const valueToStore = value instanceof Function ? value(state) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(valueToStore);
      } catch (error) {
        console.error('Error writing to local storage:', error);
      }
    }
  };

  useEffect(() => {
    if (isClient) {
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key === key) {
          try {
            const newValue = JSON.parse(e.newValue || '');
            setState(newValue);
          } catch (error) {
            console.error('Error handling storage change:', error);
          }
        }
      };

      window.addEventListener('storage', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }
  }, [isClient, key]);

  return [state, setValue] as const;
};

export default useLocalStorage;

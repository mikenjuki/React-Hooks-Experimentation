import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocaleStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //Check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    // Set State
    setLocalStorageValue(value);

    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

const getLocaleStorageValue = (key, initialValue) => {
  const storedItem = localStorage.getItem(key);

  return storedItem ? JSON.parse(storedItem) : initialValue;
};

export default useLocalStorage;

import { useState } from "react";

export function useLocalUser() {
  const emptyCart = [];
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const user = window.localStorage.getItem("user");
      return user ? JSON.parse(user) : emptyCart;
    } catch (err) {
      console.log(err);
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    try {
      window.localStorage.setItem("user", JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const emptyStorage = () => {
    try {
      window.localStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue, emptyStorage];
}

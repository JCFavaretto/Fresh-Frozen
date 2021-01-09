import { useState } from "react";

export function useLocalUser() {
  const emptyCart = [];
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const user = window.sessionStorage.getItem("user");
      return user ? JSON.parse(user) : emptyCart;
    } catch (err) {
      console.log(err);
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    try {
      window.sessionStorage.setItem("user", JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const emptyStorage = () => {
    try {
      window.sessionStorage.removeItem("user");
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue, emptyStorage];
}

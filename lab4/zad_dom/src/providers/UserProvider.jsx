import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const UserContext = createContext();

export function UserProvider ({ children }) {
  const [user, setUser] = useLocalStorage("loggedInUser", null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={ providerValue }>
      { children }
    </UserContext.Provider>
  );
};
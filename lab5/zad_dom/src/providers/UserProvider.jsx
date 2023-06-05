import React, { createContext, useMemo } from 'react';
import { useUser } from '../firebase/AuthService';

export const UserContext = createContext();

export function UserProvider ({ children }) {
  const user= useUser();

  return (
    <UserContext.Provider value={ user }>
      { children }
    </UserContext.Provider>
  );
};
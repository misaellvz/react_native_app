import React, { useState, createContext, useMemo } from 'react';
export const AuthContext = createContext({
  auth: null,
  login: () => {},
  logout: () => {},
});
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const login = (userData) => {
    setAuth(userData);
  };
  const logout = () => {
    setAuth(null);
  };
  const valueContext = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [login, logout, auth]
  );
  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

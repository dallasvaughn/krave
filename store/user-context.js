import { createContext, useState } from 'react';

const UserContext = createContext({
  login: () => {},
  logout: () => {},
  authenticated: false,
});

export const UserContextProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);

  const login = () => {
    setUserAuth(true);
  };

  const logout = () => {
    setUserAuth(false);
  };

  const context = {
    login: login,
    logout: logout,
    authenticated: userAuth,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserContext;

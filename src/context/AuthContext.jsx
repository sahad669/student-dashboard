import { useState } from "react";
import { createContext, useContext } from "react"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);

  const login = (name) => {
    setUser(name);
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
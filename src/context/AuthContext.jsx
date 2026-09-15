import { createContext, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);
  } catch (error) {
    console.error("Unable to restore user session:", error);
    localStorage.removeItem("user");
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  // Customer login
  const login = async (email, password) => {
    const response = await api.post("/users/login", {
      email,
      password,
    });

    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  };

  // Admin login
  const adminLogin = async (email, password) => {
    const response = await api.post("/admins/login", {
      email,
      password,
    });

    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        adminLogin,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

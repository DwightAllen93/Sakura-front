import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] =
    useState(localStorage.getItem("admin") === "true");


  const login = async (username, password) => {

    const res = await fetch(
      "https://ejeepthesis.site/backend/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await res.json();

    if (data.success) {

      localStorage.setItem("admin", "true");
      setIsAuthenticated(true);

      return true;
    }

    return false;
  };


  const logout = () => {

    localStorage.removeItem("admin");
    setIsAuthenticated(false);

  };


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading: false,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
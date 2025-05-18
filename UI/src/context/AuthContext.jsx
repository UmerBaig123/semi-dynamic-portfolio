import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null); // optionally store user info

  const isAuthenticated = !!token;

  const addToken = (token, userData = null) => {
    localStorage.setItem("token", token);
    setToken(token);
    if (userData) setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // Optionally: Fetch user info if token exists
  useEffect(() => {
    if (token && !user) {
      // Example: decode or fetch user info
      // decode JWT or make API call
      const decoded = parseJwt(token);
      setUser(decoded?.user);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, addToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Simple JWT decoder (without verifying signature)
function parseJwt(token) {
  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    return null;
  }
}

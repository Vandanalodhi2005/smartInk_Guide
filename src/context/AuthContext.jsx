import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signIn = (email, password) => {
    // In a real app, this would make an API call
    const userData = {
      id: Date.now(),
      email,
      name: email.split('@')[0],
      role: email === 'admin@printscarts.com' ? 'admin' : 'user',
      createdAt: new Date().toISOString()
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true, user: userData };
  };

  const signUp = (name, email, password) => {
    // In a real app, this would make an API call
    const userData = {
      id: Date.now(),
      name,
      email,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return { success: true, user: userData };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const value = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
    isAdmin: user?.role === 'admin'
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


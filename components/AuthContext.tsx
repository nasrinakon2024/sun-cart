'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);

  // পেজ লোড হলে লোকাল স্টোরেজ থেকে ইউজার ডাটা চেক করা
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Register korar somoy check korar jonno function
  const register = (userData: any) => {
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Check korchi email already ase kina
    const userExists = existingUsers.find((u: any) => u.email === userData.email);
    
    if (userExists) {
      alert("Account already exists with this email!"); 
      return false; 
    }

    // Notun user save kora
    existingUsers.push(userData);
    localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return true; 
  };

  const login = (email: string) => {
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userFound = existingUsers.find((u: any) => u.email === email);

    if (userFound) {
      setUser(userFound);
      localStorage.setItem('user', JSON.stringify(userFound));
      return true;
    } else {
      alert("No account found with this email. Please register first!");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // আপডেট ফাংশন যা যোগ করলাম
  const updateUser = (updatedData: { name: string; photo: string }) => {
    setUser((prev: any) => {
      const newUser = { ...prev, ...updatedData };
      localStorage.setItem('user', JSON.stringify(newUser));
      return newUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
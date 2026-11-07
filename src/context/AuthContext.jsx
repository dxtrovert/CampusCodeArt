import { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const AuthContext = createContext(null);
const STORAGE_KEY = 'campuscode-user';

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage(STORAGE_KEY, null);
  const value = useMemo(() => ({
    user,
    signIn: (profile) => setUser(profile),
    signOut: () => setUser(null),
  }), [setUser, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider.');
  return context;
}

import { useState, useEffect, useCallback } from 'react';
import { USERS } from '@/mocks/crmData';

export type UserRole = 'admin' | 'user';

export interface CrmUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

const SESSION_KEY = 'broadview_crm_session';

export function useCrmAuth() {
  const [currentUser, setCurrentUser] = useState<CrmUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        const user = JSON.parse(stored) as CrmUser;
        setCurrentUser(user);
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
    setAuthLoading(false);
  }, []);

  const login = useCallback((email: string, password: string): { success: boolean; error?: string } => {
    const match = USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!match) {
      return { success: false, error: 'Invalid email or password.' };
    }
    const user: CrmUser = { id: match.id, email: match.email, name: match.name, role: match.role };
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    setCurrentUser(user);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }, []);

  return { currentUser, authLoading, login, logout };
}

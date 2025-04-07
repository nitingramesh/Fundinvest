import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, StartupUser, InvestorUser, UserRole, DashboardStats } from '../types';

// Mock data for development - in production this would come from API
import { mockStartups, mockInvestors } from '../utils/mockData';

type AuthUser = StartupUser | InvestorUser | null;

interface AppContextType {
  isAuthenticated: boolean;
  currentUser: AuthUser;
  dashboardStats: DashboardStats | null;
  userRole: UserRole | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<StartupUser | InvestorUser>, role: UserRole) => Promise<boolean>;
  updateUserProfile: (userData: Partial<StartupUser | InvestorUser>) => Promise<boolean>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Default dashboard stats
const defaultStats: DashboardStats = {
  totalMatches: 0,
  profileViews: 0,
  meetingsScheduled: 0,
  activeDeals: 0,
  fundingProgress: 0,
  investmentCommitments: 0,
  openDeals: 0,
  potentialInvestments: 0,
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<AuthUser>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);

  // Mock login function - would use API in real app
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists in mock data
      let user: AuthUser = null;
      
      // Check in startups
      const startupUser = mockStartups.find(startup => startup.email === email);
      if (startupUser) {
        user = startupUser;
      }
      
      // Check in investors
      if (!user) {
        const investorUser = mockInvestors.find(investor => investor.email === email);
        if (investorUser) {
          user = investorUser;
        }
      }
      
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        setUserRole(user.role);
        
        // Set mock dashboard stats
        setDashboardStats({
          ...defaultStats,
          totalMatches: Math.floor(Math.random() * 20) + 5,
          profileViews: Math.floor(Math.random() * 100) + 10,
          meetingsScheduled: Math.floor(Math.random() * 10),
          activeDeals: Math.floor(Math.random() * 5),
        });
        
        // Store in local storage
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = (): void => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    setUserRole(null);
    setDashboardStats(null);
    localStorage.removeItem('user');
  };

  // Mock register function - would use API in real app
  const register = async (userData: Partial<StartupUser | InvestorUser>, role: UserRole): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create a new user with base properties
      const newUser = {
        ...userData,
        id: `user-${Date.now()}`,
        questId: `Q-${Math.floor(Math.random() * 10000)}`,
        role,
        createdAt: new Date(),
      } as StartupUser | InvestorUser;
      
      if (role === 'startup') {
        (newUser as StartupUser).level = 'L1';
      } else {
        (newUser as InvestorUser).level = 'L1';
      }
      
      // In real app, would store via API
      // For demo, log the registration and return success
      console.log('Registered:', newUser);
      
      // Automatically log them in
      setCurrentUser(newUser);
      setIsAuthenticated(true);
      setUserRole(role);
      
      setDashboardStats({
        ...defaultStats,
        totalMatches: 0,
        profileViews: 0,
      });
      
      // Store in local storage
      localStorage.setItem('user', JSON.stringify(newUser));
      
      return true;
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  };

  // Mock update profile function - would use API in real app
  const updateUserProfile = async (userData: Partial<StartupUser | InvestorUser>): Promise<boolean> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (currentUser) {
        // Use type assertion to maintain the role-specific type
        const updatedUser = currentUser.role === 'startup'
          ? { ...(currentUser as StartupUser), ...userData } as StartupUser
          : { ...(currentUser as InvestorUser), ...userData } as InvestorUser;
        
        setCurrentUser(updatedUser);
        
        // Store in local storage
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Update profile error:", error);
      return false;
    }
  };

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as AuthUser;
      setCurrentUser(parsedUser);
      setIsAuthenticated(true);
      setUserRole(parsedUser?.role || null);
      
      // Set mock dashboard stats
      setDashboardStats({
        ...defaultStats,
        totalMatches: Math.floor(Math.random() * 20) + 5,
        profileViews: Math.floor(Math.random() * 100) + 10,
        meetingsScheduled: Math.floor(Math.random() * 10),
        activeDeals: Math.floor(Math.random() * 5),
      });
    }
  }, []);

  return (
    <AppContext.Provider value={{
      isAuthenticated,
      currentUser,
      userRole,
      dashboardStats,
      login,
      logout,
      register,
      updateUserProfile,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
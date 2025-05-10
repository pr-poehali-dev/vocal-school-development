
import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: "student" | "admin";
  subscription: "standard" | "premium" | "free";
  joinedAt: Date;
  nextLesson?: {
    date: Date;
    teacherName: string;
    type: string;
  };
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Предустановленный пользователь для демонстрации
  const [user, setUser] = useState<User | null>({
    id: "user_123456",
    name: "Анна Сергеева",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    email: "anna@example.com",
    role: "student",
    subscription: "standard",
    joinedAt: new Date("2024-03-15"),
    nextLesson: {
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Через 2 дня
      teacherName: "Елена Соловьева",
      type: "Академический вокал"
    }
  });

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const LOCAL_STORAGE_KEY = "educourse-user-data";

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    quizAnswers: {},
    learningProgress: {},
    forumPosts: [],
    cvData: {},
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) setUserData(JSON.parse(stored));
  }, []);

  // Save to localStorage on userData change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

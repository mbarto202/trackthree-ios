import React, { createContext, ReactNode, useContext, useState } from "react";

type TrackerContextType = {
  calories: number;
  protein: number;
  water: number;
  setCalories: (value: number) => void;
  setProtein: (value: number) => void;
  setWater: (value: number) => void;
  addCalories: (amount: number) => void;
  addProtein: (amount: number) => void;
  addWater: (amount: number) => void;
};

const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

export const useTracker = () => {
  const context = useContext(TrackerContext);
  if (!context)
    throw new Error("useTracker must be used within TrackerProvider");
  return context;
};

export const TrackerProvider = ({ children }: { children: ReactNode }) => {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [water, setWater] = useState(0);

  // Add functions to increment the values
  const addCalories = (amount: number) => setCalories((prev) => prev + amount);
  const addProtein = (amount: number) => setProtein((prev) => prev + amount);
  const addWater = (amount: number) => setWater((prev) => prev + amount);

  return (
    <TrackerContext.Provider
      value={{
        calories,
        protein,
        water,
        setCalories,
        setProtein,
        setWater,
        addCalories,
        addProtein,
        addWater,
      }}
    >
      {children}
    </TrackerContext.Provider>
  );
};

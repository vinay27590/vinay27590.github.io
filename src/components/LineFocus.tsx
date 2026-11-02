"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { LineId } from "./data";

type LineFocusValue = {
  focused: LineId | null;
  setFocused: (id: LineId | null) => void;
};

const LineFocusContext = createContext<LineFocusValue>({
  focused: null,
  setFocused: () => {},
});

export function LineFocusProvider({ children }: { children: ReactNode }) {
  const [focused, setFocused] = useState<LineId | null>(null);
  return (
    <LineFocusContext.Provider value={{ focused, setFocused }}>
      {children}
    </LineFocusContext.Provider>
  );
}

export const useLineFocus = () => useContext(LineFocusContext);

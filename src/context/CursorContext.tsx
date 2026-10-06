import React, { createContext, useContext, useState } from 'react';

export type CursorVariant = 'default' | 'hover' | 'project' | 'link' | 'button' | 'hidden';

interface CursorContextType {
  cursorVariant: CursorVariant;
  cursorText: string;
  setCursorVariant: (variant: CursorVariant) => void;
  setCursorText: (text: string) => void;
  setProjectHover: (title?: string) => void;
  setButtonHover: () => void;
  setLinkHover: () => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setProjectHover = (title?: string) => {
    setCursorVariant('project');
    setCursorText(title ? `VIEW CASE STUDY →` : 'EXPLORE →');
  };

  const setButtonHover = () => {
    setCursorVariant('button');
    setCursorText('');
  };

  const setLinkHover = () => {
    setCursorVariant('link');
    setCursorText('');
  };

  const resetCursor = () => {
    setCursorVariant('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        setCursorText,
        setProjectHover,
        setButtonHover,
        setLinkHover,
        resetCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) throw new Error('useCursor must be used within a CursorProvider');
  return context;
};

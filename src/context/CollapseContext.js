import { createContext, useContext, useState } from 'react';

const CollapseContext = createContext();

export const CollapseProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CollapseContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = () => useContext(CollapseContext);

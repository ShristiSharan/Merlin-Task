import React, { useContext, useState, createContext } from "react";

const UIContext = createContext(null);
function UIProvider({ children }) {
  const [allResults, setAllResults] = useState([""]);
  const [disableRefresh, setDisableRefresh] = useState(false);

  return (
    <UIContext.Provider
      value={{ allResults, setAllResults, disableRefresh, setDisableRefresh }}
    >
      {children}
    </UIContext.Provider>
  );
}

function useUIContext() {
  return useContext(UIContext);
}

export { UIProvider, useUIContext };

import React, { createContext } from "react";

export const EletroContext = createContext(null);

const Context = ({ children }) => {
  const data = {
    MyName: "test",
  };
  return (
    <EletroContext.Provider value={data}>
        {children}
    </EletroContext.Provider>
  );
};

export default Context;

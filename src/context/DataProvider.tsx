import React, { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};
let defaultValue = {};

export const DataContext = createContext(defaultValue);

export const DataProvider = ({ children }: Props) => {
  const [init, setInit] = useState();
  return (
    <DataContext.Provider value={[init, setInit]}>
      {children}
    </DataContext.Provider>
  );
};

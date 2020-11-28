import React, { useState } from 'react';

export const ControlContext = React.createContext<any>(null);
const ControlProvider = ({children}: any) => {
  const [tabIndex, setTabIndex] = useState(3);
  return (
    <ControlContext.Provider
      value={{
        tabIndex: tabIndex,
        setTabIndex: (i: number) => setTabIndex(i)
      }}
    >
      {children}
    </ControlContext.Provider>
  )
}
export default ControlProvider;
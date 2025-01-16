import React, { createContext } from 'react'

import{createContex, useState, useContext} from 'react'

export const ContextDriver = createContext();


const Drivercontex = ({children}) => {
  const [driver, setDriver] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  const updatedriver = (driverdata)=>{
    setDriver(driverdata);
  }

  const value = {
    driver,
    setDriver,
    isLoading,
    setIsLoading,
    error,
    setError
  }

  return (
    <ContextDriver.Provider value = {value}>
        {children}
    </ContextDriver.Provider>
  )
}

export default Drivercontex
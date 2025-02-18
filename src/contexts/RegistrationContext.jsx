// contexts/RegistrationContext.js
import { createContext, useState } from 'react';

export const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [clientType, setClientType] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <RegistrationContext.Provider 
      value={{ 
        clientType, 
        setClientType, 
        currentStep, 
        setCurrentStep 
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};
import React, { createContext, useContext, useState, useMemo, useCallback } from "react";

// Initial form state structure
const initialFormState = {
  General: {
    accountType: "",
    generalInfo: {
      clientType: "",
      email: "",
      phoneNumber: "",
      panNumber: "",
    }
  },
  Corporate: {
    basic: {
      companyname: "",
      companyType: "",
      companyRegistrationNum: "",
      isSubsidiary: "",
      isListed: ""
    },
    info: {
      companyRegistrationAD: "",
      companyRegistrationBS: "",
      contactNum: "",
      companyCEOName: "",
      companySecretaryName: "",
      companyRegistrationOffice: "",
      countryOfRegistration: "",
      typeOfBusiness: "",
      dateOfIncorporationAD: "",
      dateOfIncorporationBS: ""
    },
    detail: {
      firstContactPersonName: "",
      firstContactFatherName: "",
      firstContactGrandfatherName: "",
      firstContactDesignation: "",
      secondContactPersonName: "",
      secondContactFatherName: "",
      secondContactGrandfatherName: "",
      secondContactDesignation: "",
      fax: "",
      companyWebsite: ""
    }
  },
  Ownership: {
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: ""
    },
    personalDetail: {
      designation: "",
      fatherName: "",
      grandfatherName: "",
      panNumber: "",
      email: ""
    }
  },
  Mutual: {
    basic: {
      companyname: "",
      companyType: "",
      companyRegistrationNum: "",
      isSubsidiary: "",
      isListed: ""
    },
    info: {
      companyRegistrationAD: "",
      companyRegistrationBS: "",
      contactNum: "",
      companyCEOName: "",
      companySecretaryName: "",
      companyRegistrationOffice: "",
      countryOfRegistration: "",
      typeOfBusiness: "",
      dateOfIncorporationAD: "",
      dateOfIncorporationBS: ""
    },
    detail: {
      firstContactPersonName: "",
      firstContactFatherName: "",
      firstContactGrandfatherName: "",
      firstContactDesignation: "",
      secondContactPersonName: "",
      secondContactFatherName: "",
      secondContactGrandfatherName: "",
      secondContactDesignation: "",
      fax: "",
      companyWebsite: ""
    }
  },
  Address: {
    countryOfResidence: "",
    state: "",
    district: "",
    municipality: "",
    wardNum: "",
    Street: "",
    addressType: { 
      corporateOffice: "", 
      registeredOffice: "", 
      branchOffice: "" 
    }
  },
  Bank: {
    bankType: "",
    branch: "",
    accountType: "",
    accountNumber: "",
  },
  Depositary: {
    BOID: ""
  },
  Documents: {
    citizenship: ""
  },
  UserAgreement: ""
};

// Form field definitions for progress calculation
const formFields = {
  general: ["accountType", "email", "phoneNumber", "panNumber"],
  address: ["countryOfResidence", "state", "district", "municipality", "wardNum", "Street"],
  bank: ["bankType", "branch", "accountType", "accountNumber"],
  depositary: ["BOID"],
  documents: ["citizenship"],
  userAgreement: ["agreement"]
};

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [clientType, setClientType] = useState(null);

  // Memoized sidebar items based on client type
  const sidebarItems = useMemo(() => {
    const baseItems = [
      { content: "General" },
      { content: "Address" },
      { content: "Bank" },
      { content: "Depositary" },
      { content: "Documents" },
      { content: "User Agreement" }
    ];

    const clientTypeMapping = {
      corporate: { content: "Corporate" },
      mutual: { content: "Mutual" },
      individual: { content: "Individual" }
    };

    const clientItem = clientTypeMapping[formData.General.generalInfo.clientType];
    if (clientItem) {
      baseItems.splice(1, 0, clientItem);
    }

    return baseItems;
  }, [formData.General.generalInfo.clientType]);

  // Enhanced form data update function
  const updateFormData = useCallback((section, data) => {
    setFormData(prev => {
      const newData = { ...prev };
      
      // Handle nested updates
      if (typeof data === 'object') {
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value === 'object' && !Array.isArray(value)) {
            newData[section] = {
              ...newData[section],
              [key]: {
                ...newData[section]?.[key],
                ...value
              }
            };
          } else {
            newData[section] = {
              ...newData[section],
              [key]: value
            };
          }
        });
      }

      return newData;
    });

    // Clear related form errors
    setFormErrors(prev => {
      const newErrors = { ...prev };
      Object.keys(data).forEach(field => {
        delete newErrors[`${section}.${field}`];
      });
      return newErrors;
    });
  }, []);

  // Enhanced progress calculation
  const calculateProgress = useCallback(() => {
    let totalFields = 0;
    let filledFields = 0;

    // Helper function to check nested objects
    const countFields = (obj, parentKey = '') => {
      Object.entries(obj).forEach(([key, value]) => {
        const fullKey = parentKey ? `${parentKey}.${key}` : key;
        
        if (typeof value === 'object' && value !== null) {
          countFields(value, fullKey);
        } else {
          totalFields++;
          if (value && value.toString().trim() !== '') {
            filledFields++;
          }
        }
      });
    };

    // Count all fields except those not relevant to current client type
    Object.entries(formData).forEach(([section, data]) => {
      if (section === clientType || section === 'General' || 
          section === 'Address' || section === 'Bank' || 
          section === 'Depositary' || section === 'Documents' || 
          section === 'UserAgreement') {
        countFields(data);
      }
    });

    return Math.floor((filledFields / totalFields) * 100);
  }, [formData, clientType]);

  // Validate form data
  const validateForm = useCallback((section) => {
    const errors = {};
    
    // Add validation logic here based on your requirements
    if (section === 'General') {
      if (!formData.General.accountType) {
        errors['General.accountType'] = 'Account type is required';
      }
      if (!formData.General.generalInfo.email) {
        errors['General.generalInfo.email'] = 'Email is required';
      }
    }

    setFormErrors(prev => ({
      ...prev,
      ...errors
    }));

    return Object.keys(errors).length === 0;
  }, [formData]);

  const value = {
    formData,
    formErrors,
    updateFormData,
    calculateProgress,
    sidebarItems,
    clientType,
    setClientType,
    currentStep,
    setCurrentStep,
    validateForm
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};
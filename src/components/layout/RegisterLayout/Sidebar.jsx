import React,{useState,useRef,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ clientType, currentStep }) => {
  const navigate = useNavigate();

  // Base sections that are always shown
  const baseSections = [
    {
      id: "general",
      title: "General",
      subsections: ["Account Type", "General Information"],
      totalSteps: 2,
      routes: ["/register/general/1", "/register/general/2"]
    },
    {
      id: "address",
      title: "Address",
      subsections: ["Address Details"],
      totalSteps: 1,
      routes: ["/register/address"]
    },
    {
      id: "bank",
      title: "Bank",
      subsections: ["Bank Information"],
      totalSteps: 1,
      routes: ["/register/bank"]
    },
    {
      id: "depositary",
      title: "Depositary",
      subsections: ["Depositary Details"],
      totalSteps: 1,
      routes: ["/register/depositary"]
    },
    {
      id: "documents",
      title: "Documents",
      subsections: ["Document Upload"],
      totalSteps: 1,
      routes: ["/register/document"]
    },
    {
      id: "agreement",
      title: "User Agreement",
      subsections: ["Terms & Conditions"],
      totalSteps: 1,
      routes: ["/register/user-agreement"]
    }
  ];

  // Client type specific sections
  const typeSpecificSections = {
    corporate: [
      {
        id: "corporate",
        title: "Corporate",
        subsections: ["Company Details", "Additional Info", "Verification"],
        totalSteps: 3,
        position: 1,
        routes: ["/register/corporate/1", "/register/corporate/2", "/register/corporate/3","/register/corporate/ownership/1","/register/corporate/ownership/2","/register/corporate/ownership/3",
          "/register/corporate/ownership/4"
        ]
      }
    ],
    individual: [
      {
        id: "individual",
        title: "Individual",
        subsections: ["Personal Details", "Identity Verification", "Additional Info"],
        totalSteps: 3,
        position: 1,
        routes: ["/register/individual/1", "/register/individual/2", "/register/individual/3","/register/moneylaunder/1","/register/moneylaunder/2","/register/moneylaunder/3","/register/moneylaunder/4"]
      }
    ],
    mutual: [
      {
        id: "mutual",
        title: "Mutual",
        subsections: ["Fund Details", "Investment Profile", "Risk Assessment"],
        totalSteps: 3,
        position: 1,
        routes:  ["/register/mutual/1", "/register/mutual/2", "/register/mutual/3","/register/mutual/ownership/1","/register/mutual/ownership/2","/register/mutual/ownership/3",
          "/register/mutual/ownership/4"]
      }
    ]
  
  };

  const [activeItem, setActiveItem] = useState(null);
  const sidebarRef = useRef(null);
  
  // const handleItemClick = useCallback((label) => {
  //   setActiveItem((prevActiveItem) => (prevActiveItem === label ? null : label));
  // }, []);
  // const handleCloseOptions = useCallback(() => {
  //   setActiveItem(null);
  // }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveItem(null);
      }
    }
    if (activeItem !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeItem]); 

  // Get all sections based on client type
  const getAllSections = () => {
    let sections = [...baseSections];
    if (clientType && typeSpecificSections[clientType]) {
      const clientSections = typeSpecificSections[clientType];
      clientSections.forEach(section => {
        sections.splice(section.position, 0, section);
      });
    }
    return sections;
  };

  const sections = getAllSections();

  // Calculate total steps completed before current section
  const getStepProgress = (sectionIndex) => {
    const stepsBeforeSection = sections
      .slice(0, sectionIndex)
      .reduce((total, section) => total + section.totalSteps, 0);
    
    const currentSectionProgress = Math.min(
      currentStep - stepsBeforeSection,
      sections[sectionIndex].totalSteps
    );

    return {
      isCurrentSection: currentStep >= stepsBeforeSection && 
                       currentStep < stepsBeforeSection + sections[sectionIndex].totalSteps,
      isPastSection: currentStep >= stepsBeforeSection + sections[sectionIndex].totalSteps,
      progress: currentSectionProgress,
      stepOffset: stepsBeforeSection
    };
  };

  // Handle section click
  const handleSectionClick = (section, dotIndex) => {
    if (section.routes && section.routes[dotIndex]) {
      navigate(section.routes[dotIndex]);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section, index) => {
        const { isCurrentSection, isPastSection, progress } = getStepProgress(index);
        
        return (
          <div 
            key={section.id}
            className={`flex w-full max-w-[410px] items-center border-l-2 ${
              isCurrentSection ? "border-[#F1F510]" : "border-gray-700"
            } pl-4 py-4`}
          >
            {/* Info Icon */}
            <div className={`h-6 w-6 flex items-center justify-center ${
              isCurrentSection ? "text-[#F1F510]" : "text-gray-400 opacity-50"
            }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 16v-4" strokeWidth="2" />
                <path d="M12 8h.01" strokeWidth="2" />
              </svg>
            </div>

            {/* Section Title and Progress Dots */}
            <div className="flex-1 ml-4">
              <button
                onClick={() => handleSectionClick(section, 0)}
                className={`w-full text-left font-roboto text-2xl font-medium tracking-wide ${
                  isCurrentSection ? "text-[#F1F510]" : 
                  isPastSection ? "text-white" : "text-gray-400"
                }`}
              >
                {section.title}
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 mt-4">
                {[...Array(section.totalSteps)].map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => handleSectionClick(section, dotIndex)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      isCurrentSection && dotIndex < progress
                        ? "bg-[#F1F510]"
                        : isPastSection
                        ? "bg-white"
                        : "bg-gray-500"
                    }`}
                    aria-label={`Go to ${section.title} step ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Step Counter */}
            <div className={`h-10 px-5 flex items-center justify-center rounded-lg font-roboto text-base ${
              isCurrentSection 
                ? "bg-[#2D2D2D] text-[#F1F510]"
                : "bg-[#1A1A1A] text-gray-400"
            }`}>
              {section.totalSteps}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
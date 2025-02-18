import { useNavigate, useLocation } from 'react-router-dom';

// Define the navigation paths in order
const CORPORATE_PATHS = [
  '/register/general/1',
  '/register/general/2',
  '/register/corporate/1',
  '/register/corporate/2',
  '/register/corporate/3',
  '/register/corporate/ownership/1',
  '/register/corporate/ownership/2',
  '/register/corporate/ownership/3',
  '/register/corporate/ownership/4',
  '/register/address',
  '/register/bank',
  '/register/depositary',
  '/register/document',
  '/register/user-agreement'
];

const INDIVIDUAL_PATHS = [
  '/register/general/1',
  '/register/general/2',
  '/register/individual/1',
  '/register/individual/2',
  '/register/individual/3',
  '/register/individual/4',
  '/register/moneylaunder/1',
  '/register/moneylaunder/2',
  '/register/moneylaunder/3',
  '/register/moneylaunder/4',
  '/register/address',
  '/register/bank',
  '/register/depositary',
  '/register/document',
  '/register/user-agreement'
];

const MUTUAL_PATHS = [
  '/register/general/1',
  '/register/general/2',
  '/register/mutual/1',
  '/register/mutual/2',
  '/register/mutual/3',
  '/register/mutual/ownership/1',
  '/register/mutual/ownership/2',
  '/register/mutual/ownership/3',
  '/register/mutual/ownership/4',
  '/register/address',
  '/register/bank',
  '/register/depositary',
  '/register/document',
  '/register/user-agreement'
];

const getPathsForAccountType = (clientType) => {
  switch (clientType) {
    case 'corporate':
      return CORPORATE_PATHS;
    case 'individual':
      return INDIVIDUAL_PATHS;
    case 'mutual':
      return MUTUAL_PATHS;
    default:
      return CORPORATE_PATHS; // fallback to corporate if type is unknown
  }
};

const NavigationButtons = ({ clientType  }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Select the appropriate path array based on account type
  const paths = getPathsForAccountType(clientType);
  
  // Find current index in the path array
  const currentIndex = paths.findIndex(path => path === currentPath);
  
  const handleNext = () => {
    if (currentIndex < paths.length - 1) {
      navigate(paths[currentIndex + 1]);
    }
  };
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(paths[currentIndex - 1]);
    }
  };

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === paths.length - 1;

  return (
    <div className="flex flex-col gap-4 w-[1191px] h-[124px] ml-[30rem] mb-12">
      <div className="w-[1191px] p-6 bg-[#161616] flex justify-start items-start border-t border-gray-700 mb-12 gap-6">
        <button
          onClick={handlePrevious}
          disabled={isFirstPage}
          className={`flex w-[250px] py-[14px] px-[40px] justify-center items-center gap-[10px] rounded-[8px] ${
            isFirstPage 
              ? 'bg-[#1A1A1A] text-gray-500 cursor-not-allowed' 
              : 'bg-[#282828] text-white hover:bg-[#333333]'
          } font-roboto text-[20px] font-normal capitalize`}
        >
         ← Previous 
        </button>
        
        <button
          onClick={handleNext}
          disabled={isLastPage}
          className={`flex w-[250px] py-[14px] px-[40px] justify-center items-center gap-[10px] rounded-[8px] ${
            isLastPage
              ? 'bg-[#F1F510] text-black hover:bg-[#e1e500] w-[290px]'
              : 'bg-[#F1F510] text-black hover:bg-[#e1e500]'
          } font-roboto text-[20px] font-normal capitalize`}
        >
          {isLastPage ? 'Submit Application →' : 'Next →'}
        </button>
      </div>
    </div>
  );
};

export default NavigationButtons;
import { Link, Outlet, useParams } from "react-router-dom";
import CircularProgress from "../RegisterLayout/CircularProgress";
import SideBar from "../RegisterLayout/Sidebar";
import NavigationButtons from "../RegisterLayout/Navigation";

const sidebarItems = [
  { content: "General", count: 2, progressStep: 1 },
  {content: "Corporate", count: 1, progressStep: 2},
  {content: "Individual", count: 1, progressStep: 3},
  { content: "Address", count: 1, progressStep: 4 },
  { content: "Bank", count: 1, progressStep: 5},
  {content: "Mutual", count: 1, progressStep: 6},
  { content: "Depositary", count: 1, progressStep: 7 },
  { content: "Documents", count: 1, progressStep: 8 },
  { content: "User Agreement", count: 1, progressStep: 9 },
];

const RegisterLayout = () => {
  const { step } = useParams();
  const currentStep = Number(step) || 1;

  // Determine if the current step is the last step
  const isLastStep = currentStep === sidebarItems.length;

  return (
    <div className="flex flex-col h-screen bg-black text-white sticky">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[450px] p-8 border-r border-gray-700 ">
          <CircularProgress />
          <div className="mt-12 space-y-4">
          {sidebarItems.map((item, index) => (
          <SideBar
          key={index}
          content={item.content}
          count={item.count}
          activeStep={currentStep} // Pass the current step
          isActive={item.progressStep === currentStep} // Highlight the active step
          /> ))}

          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          {/* Move button to top-right */}
          <div className="absolute top-6 right-8">
            <button className="w-[250px] h-[50px] bg-[#333] text-[#BDBDBD] font-roboto text-[18px] rounded-[8px] flex items-center justify-center hover:bg-gray-700 transition">
              I have an account!
              <Link to="/" className="text-[#F1F510] hover:underline ml-2">
                Log In
              </Link>
            </button>
          </div>
          <Outlet /> {/* This is where Register (or other nested components) will render */}
        </div>
      </div>

      {/* Sticky Footer Navigation */}
    <NavigationButtons/>
    </div>
  );
};

export default RegisterLayout;
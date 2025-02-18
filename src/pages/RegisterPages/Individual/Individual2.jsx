import { useState } from "react";
import Umale from "../../../assets/images/registrationImages/uncolouredMale.svg";
import Male from "../../../assets/images/registrationImages/uncolouredMale.svg";
import Ufemale from "../../../assets/images/registrationImages/colouredFemale.svg";
import Female from "../../../assets/images/registrationImages/colouredFemale.svg";
import Uother from "../../../assets/images/registrationImages/vector.svg";
import Other from "../../../assets/images/registrationImages/vector.svg";
import TickIcon from "../../../assets/images/registrationImages/checkBlue.svg"; // Add a blue tick icon here

const accountTypes = [
    {
      name: "female",
      unselectedImage: Ufemale,
      selectedImage: Female,
    },
  {
    name: "male",
    unselectedImage: Umale,
    selectedImage: Male,
  },
  {
    name: "other",
    unselectedImage: Uother,
    selectedImage: Other,
  },
];

const Individual2 = () => {
  const [selected, setSelected] = useState(null); // Track selected account type

  const handleSelect = (index) => {
    setSelected(index === selected ? null : index); // Toggle selection
  };

  return (
    <div className="relative flex flex-col items-start justify-between h-auto text-white overflow-hidden pb-20 mb-60 mr-32">
      <div className="mt-24">
        <h1 className="text-white font-roboto text-5xl font-medium leading-none tracking-[1.92px] mb-14">
       Select Your Gender!
        </h1>

        <div className="flex gap-8">
          {accountTypes.map((account, index) => (
            <div
              key={account.name}
              className={`relative flex w-[277px] p-8 px-[40px] flex-col  items-center gap-[16px] flex-shrink-0 border-[2px] ${
                selected === index ? "border-[#01BAEF]" : "border-[#4F4F4F]"
              } rounded-[12px] cursor-pointer transition`}
              onClick={() => handleSelect(index)}
            >
              {/* Blue Tick Icon (Only Show When Selected) */}
              {selected === index && (
                <img
                
                  src={TickIcon}
                  alt="Selected"
                  className="absolute top-2 right-2 w-6 h-6 p-[2px] bg-[#2d2d2d] rounded-full"
                />
              )}

              <img
           
                src={selected === index ? account.selectedImage : account.unselectedImage}
                alt={account.name}
              />
              <h1
                className={`font-roboto text-[36px] font-medium leading-normal tracking-[1.44px] capitalize ${
                  selected === index ? "text-[#01BAEF]" : "text-[#4F4F4F]"
                }`}
              >
                {account.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Individual2;

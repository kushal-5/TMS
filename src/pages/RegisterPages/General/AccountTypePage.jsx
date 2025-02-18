import { useState } from "react";
import Ucorporate from "../../../assets/images/registrationImages/uncolouredCorporate.svg";
import Corporate from "../../../assets/images/registrationImages/ColuredCorporate.svg";
import Uindividual from "../../../assets/images/registrationImages/uncolouredIndividual.svg";
import Individual from "../../../assets/images/registrationImages/colouredIndividual.svg";
import Umutual from "../../../assets/images/registrationImages/uncolouredMutual.svg";
import Mutual from "../../../assets/images/registrationImages/colouredMutual.svg";
import TickIcon from "../../../assets/images/registrationImages/checkBlue.svg"; // Add a blue tick icon here

const accountTypes = [
  {
    name: "Corporate",
    unselectedImage: Ucorporate,
    selectedImage: Corporate,
  },
  {
    name: "Individual",
    unselectedImage: Uindividual,
    selectedImage: Individual,
  },
  {
    name: "Mutual",
    unselectedImage: Umutual,
    selectedImage: Mutual,
  },
];

const AccountType = () => {
  const [selected, setSelected] = useState(null); // Track selected account type

  const handleSelect = (index) => {
    setSelected(index === selected ? null : index); // Toggle selection
  };

  return (
    <div className="relative flex flex-col items-start justify-between h-auto text-white overflow-hidden pb-20 mb-60 mr-32">
      <div className="mt-24">
        <h1 className="text-white font-roboto text-5xl font-medium leading-none tracking-[1.92px] mb-14">
          What is your account Type?
        </h1>

        <div className="flex gap-8">
          {accountTypes.map((account, index) => (
            <div
              key={account.name}
              className={`relative flex w-[277px] p-[20px] px-[40px] flex-col items-center gap-[16px] flex-shrink-0 border-[2px] ${
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

export default AccountType;

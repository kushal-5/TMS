import { useState } from "react";
import Form from "../../../components/ui/signin/Form";
import Corporate from "../../../assets/images/registrationImages/corAddress.svg"
import Registered from "../../../assets/images/registrationImages/regAddress.svg"
import Branch from "../../../assets/images/registrationImages/branAddress.svg"
import TickIcon from "../../../assets/images/registrationImages/checkBlue.svg"; // Add a blue tick icon here

const addressType = [
  {
    name: "Corporate Office",
    unselectedImage: Corporate,
    selectedImage: Corporate,
  },
  {
    name: "Registered Office",
    unselectedImage: Registered,
    selectedImage: Registered,
  },
  {
    name: "Branch Office",
    unselectedImage: Branch,
    selectedImage: Branch,
  },
];

const Address = () => {
    const [countryType, setCountryType] = useState("");
    const [stateType, setStateType] = useState("");
    const [districtType, setDistrictType]= useState("")
    const [municipality, setMunicipality] = useState("")

    const [selected, setSelected] = useState(null); // Track selected account type

     const handleSelect = (index) => {
    setSelected(index === selected ? null : index); // Toggle selection
  };
    
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Address Information & Details
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-8 w-full">


          {/* Row 1 */}
      <div className="flex flex-col gap-4 w-[426px]">
       {/* Label */}
      <label
        htmlFor="countryType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
       Country Of Residence
      </label>

          <div className="relative w-[476px]">
        <select
          id="countryType"
          value={countryType}
          onChange={(e) => setCountryType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" defaultValue="Nepal" className="text-[#E0E0E0] bg-black">
           Nepal
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              India
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           China
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           Korea
          </option>
        </select>
</div>
        </div>

      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="countryType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
   State
      </label>

          <div className="relative w-[476px]">
        <select
          id="countryType"
          value={stateType}
          onChange={(e) => setStateType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select State
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              India
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           China
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           Korea
          </option>
        </select>
        </div>
        </div>






      {/* Row 2 */}
    

        <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="districtType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
     Select District
      </label>

          <div className="relative w-[476px]">
        <select
          id="districtType"
          value={districtType}
          onChange={(e) => setDistrictType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select District
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              India
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           China
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           Korea
          </option>
        </select>
        </div>
        </div>

        <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="municipality"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
    Municipality
      </label>

          <div className="relative w-[476px]">
        <select
          id="municipality"
          value={municipality}
          onChange={(e) => setMunicipality(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select Municipality
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              Kohalpur
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           Nepalgunj
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           Korea
          </option>
        </select>
        </div>
        </div>

      {/* Row 3 */}
 
  
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
             type="text" 
              id="wardNum"
              label="Ward No."
              placeholder="Ward No."
              />

      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
             type="text" 
              id="tole"
              label="Tole"
              placeholder="Tole"
              />
      {/* Row 4 */}
      <div className="flex flex-col  gap-8">
      <label
        htmlFor="districtType"
        className="text-[#828282] font-roboto text-base font-normal leading-"
      >
       Address Type
      </label>
      <div className="flex  gap-8">
          {addressType.map((account, index) => (
                <div
                  key={account.name}
                  className={`flex w-[278px] h-[96px]  flex-col-3 items-center gap-[16px] flex-shrink-0 border-[2px] ${
                    selected === index ? "border-[#01BAEF]" : "border-[#4F4F4F]"
                } cursor-pointer transition p-6 rounded-lg`}
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
                     className={`font-roboto text-lg font-medium leading-normal tracking-[1.44px] ${
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
            <button  className="flex flex-col items-start gap-4 w-[580px] mt-28">
        + Add New Ownership Details
      </button>
              </div>
  );
};

export default Address;

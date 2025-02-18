import { useState } from "react";
import Form from "../../../components/ui/signin/Form";


const Bank = () => {
    const [bankType, setBankType] = useState("");
    const [branchType, setBranchType] = useState("");
    const [accountType, setAccountType]= useState("")
    const [municipality, setMunicipality] = useState("")

    const [selected, setSelected] = useState(null); // Track selected account type

     const handleSelect = (index) => {
    setSelected(index === selected ? null : index); // Toggle selection
  };
    
      
  return (
    <div  
    className="mr-40 mb-80">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Bank Information & Details
      </h1>
      <div className="grid grid-rows-2 mr-12 grid-cols-2 gap-12 w-full">


          {/* Row 1 */}
      <div className="flex flex-col gap-4 w-[426px]">
       {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
      Bank Name
      </label>

          <div className="relative w-[476px]">
        <select
          id="bankType"
          value={bankType}
          onChange={(e) => setBankType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" defaultValue="Nepal" className="text-[#E0E0E0] bg-black">
           Select Bank
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              Global IME Bank
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           Sanima Bank
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           NIC Asia Bank
          </option>
        </select>
      </div>
        </div>
 <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
        Branch
      </label>

          <div className="relative w-[476px]">
        <select
          id="branch"
          value={branchType}
          onChange={(e) => setBranchType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select Branch
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              Kohalpur
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
           Kathmandu
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
           Lalitpur
          </option>
        </select>
        </div>
        </div>


      {/* Row 2 */}
    

        <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4" >
       Account Type
      </label>
       <div className="relative w-[476px]">
           <select
          id="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select Account Type
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

    </div>  
 </div>
  );
};

export default Bank;

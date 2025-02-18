import Form from "../../../components/ui/signin/Form"
import { useState } from "react";

const CompanyDetails1=()=>{
    const [companyType, setCompanyType] = useState("");
    const [isYes, setIsYes] = useState(false);
    const [isListed, setisListed] = useState(false);
    
return(
    <div className="relative flex flex-col items-start justify-start h-screen text-white  overflow-hidden pb-20 mr-56 ">
    <div className="mt-44 mr-20">
      <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Corporate Information & Details
      </h1>

        {/* Grid with 2 Rows */}
        <div className="grid grid-rows-2 gap-4">
          
          {/* Row 1: Client Type + Email */}
          <div className="flex gap-8">
      
    

            {/* Email */}
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="name"
              label="Company Name"
              placeholder="Company Name"
            />

      {/* Company Type */}

      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="companyType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
        Client Type
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="companyType"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
            Select Company Type
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
            Private Limited
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
            Public Limited
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
            Government Owned
          </option>
        </select>

      </div>
    </div>
          </div>

          {/* Row 2: Mobile Number + toggle buttons */}
          <div className="flex gap-8">
            {/* Mobile Number */}
            <Form
              htmlFor="number"
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[477px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-[1.5rem] px-2"
              type="number"
              id="number"
              label="Company Registration Number"
              placeholder="Company Registration Number"
            />

<div className="flex flex-col gap-2">
      {/* Label */}
      <label className="text-[#828282] font-roboto text-base font-normal leading-4 py-2">Is it a subsidiary?</label>

      {/* Toggle Button */}
      <div className="flex items-center gap-3">
        <span className={`font-medium ${!isYes ? "text-[#BDBDBD]" : "text-gray-400"}`}>
          No
        </span>

        <button
          onClick={() => setIsYes(!isYes)}
          className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
            isYes ? "bg-[#F1F510]" : "bg-gray-500"
          }`}
        >
          <div
            className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
              isYes ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>

        <span className={`font-medium ${isYes ? "text-[#BDBDBD]" : "text-gray-400"}`}>
          Yes
        </span>   <div className="flex flex-col gap-2">
      {/* Label */}
      <label className="text-[#828282] font-roboto text-base font-normal leading-4 py-2">Is it listed?</label>

      {/* Toggle Button */}
      <div className="flex items-center gap-3">
        <span className={`font-medium ${!isListed ? "text-[#BDBDBD]" : "text-gray-400"}`}>
          No
        </span>

        <button
          onClick={() => setisListed(!isListed)}
          className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
            isListed ? "bg-[#F1F510]" : "bg-gray-500"
          }`}
        >
          <div
            className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
              isListed ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>

        <span className={`font-medium ${isListed ? "text-[#BDBDBD] " : "text-gray-400"}`}>
          Yes
        </span>
      </div>
    </div>
      </div>
    </div>

 
  </div>
 </div>
 </div>
  </div>
 
)
}

export default CompanyDetails1
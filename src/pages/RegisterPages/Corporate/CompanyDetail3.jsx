import Form from "../../../components/ui/signin/Form"
import { useState } from "react";

const CompanyDetails3=()=>{
        
    const [FirstDesignation, setFirstDesignation] = useState("");
    const [SecondDesignation, setSecondDesignation] = useState("");
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Corporate Information & Details
      </h1>
      <div className="grid grid-rows-5 grid-cols-2 gap-8 w-full">

        {/* Row 1 */}
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="secondConatctName"
              label="Second Contact Person Name"
              placeholder="Second Contact Person Name"
            />

            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="firstContactFatherName"
              label="First Contact Father Name"
              placeholder="First Contact Father Name"
            />

    

      {/* Row 2 */}
     
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="firstContactGrandFatherName"
              label="First Contact Grandfather Name"
              placeholder="First Contact Grandfather Name"
            />
   
   <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="businessType"
        className="text-[#828282] font-roboto text-lg font-normal leading-4"
      >
 First Contact Designation
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="firstDesignation"
          value={FirstDesignation}
          onChange={(e) => setFirstDesignation(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
            Select  Designation
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
          Director
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
            Executive
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Shareholder
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
       Employee
          </option>
        </select>

      </div>
    </div>


      {/* Row 3 */}
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="secondContactName"
              label="Second Contact Person Name"
              placeholder="Second Contact Person Name"
            />

            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="SecondContactFatherName"
              label="Second Contact Father Name"
              placeholder="Second Contact Father Name"
            />


      {/* Row 4 */}
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="SecondContactGrandFatherName"
              label="Second Contact Grandfather Name"
              placeholder="Second Contact Grandfather Name"
            />
   
   <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="businessType"
        className="text-[#828282] font-roboto text-lg font-normal leading-4"
      >
 Second Contact Designation
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="SecondDesignation"
          value={SecondDesignation}
          onChange={(e) => setSecondDesignation(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
            Select  Designation
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
          Director
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
            Executive
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Shareholder
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
       Employee
          </option>
        </select>

      </div>
    </div>

      {/* Row 5 */}
      <Form
              htmlFor="number"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="number"
              id="faxNumber"
              label="Fax"
              placeholder="Fax"
            />

            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-lg font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="text"
              id="companyWebsite"
              label="Company Website"
              placeholder="Company Website"
            />

    </div>
</div>
  );
};


export default CompanyDetails3
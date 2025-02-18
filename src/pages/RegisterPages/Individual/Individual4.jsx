import { useState,useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import {NepaliDatePicker} from "nepali-datepicker-reactjs";
import Form from "../../../components/ui/signin/Form";

import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";

const Individual4 = () => {
    const [nationality, setNationality] = useState("");
    const [citizenshupIssuePlace, setCitizenshupIssuePlace] = useState("");
    const [isYes, setisYes] = useState(false);
    const [citizenshipIssueDateBS, setCitizenshipIssueDateBS] = useState("");
    const [citizenshipIssueDateAD, setCitizenshipIssueDateAD] = useState("");
    const dateInputRef = useRef(null);


    const handleChange = (e) => {
        setCitizenshipIssueDateBS(e.target.value);
        setCitizenshipIssueDateAD(e.target.value);

      };
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Individual Information & Details
      </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-8 w-full">


          {/* Row 1 */}
          <Form
              htmlFor="number"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="number"
              id="citizenshipNumber"
              label="Citizenship Number"
              placeholder="Citizenship Number"
            />


<div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
       Citizenship Issued Place
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="countryType"
          value={citizenshupIssuePlace}
          onChange={(e) => setCitizenshupIssuePlace(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" defaultValue="Nepal" className="text-[#E0E0E0] bg-black">
         Select Citizenship Issued Place
          </option>
          <option className="text-[#E0E0E0] bg-black">
              Banke
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Bardiya
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Dang
          </option>
        </select>

      </div>
    </div>

      {/* Row 2 */}
       <div className="w-full relative">
        <label className="text-[#828282] font-roboto text-base font-normal leading-4">
       Citizenship Issued Date B.S.
        </label>
        <div className="relative">
          <img
            src={CalendarIcon}
            alt="calendar"
            className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => dateInputRef.current?.showPicker()} // Programmatically opens the date picker
          />
          <input
            type="date"
            ref={dateInputRef} // Assign ref to input
            value={citizenshipIssueDateBS}
            onChange={handleChange}
            className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
            border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
          />
        </div>
      </div>
  
     <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
      Citizenship Issued Date A.D.
      </label>
      <div className="relative">
        <img
          src={CalendarIcon}
          alt="calendar"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => dateInputRef.current?.showPicker()} // Programmatically opens the date picker
        />
        <input
          type="date"
          ref={dateInputRef} // Assign ref to input
          value={citizenshipIssueDateAD}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>


      {/* Row 3 */}
 
      <div className="flex gap-8">
    
    
      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
     Nationality
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" defaultValue="Nepal" className="text-[#E0E0E0] bg-black">
      Nepalese
          </option>
          <option className="text-[#E0E0E0] bg-black">
              Indian
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Chinese
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Korean
          </option>
        </select>

      </div>
    </div>

  {/* Is User NRN Section */}
  <div className="flex flex-col items-start gap-2  w-[476px] ms-24">
    <label className="text-[#828282] font-roboto text-base font-normal leading-2  w-[476px]">
      Is user involved in investment company?
    </label>
    <div className="flex items-start gap-3 mt-8">
      <span className={`font-medium ${!isYes ? "text-[#BDBDBD]" : "text-gray-400"}`}>
        No
      </span>
      <button
        onClick={() => setisYes(!isYes)}
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
      </span>
    </div>



</div>



 
  </div>
 </div>
 </div>



  );
};

export default Individual4;

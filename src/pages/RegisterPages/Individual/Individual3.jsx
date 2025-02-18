import { useState,useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import {NepaliDatePicker} from "nepali-datepicker-reactjs";
import Form from "../../../components/ui/signin/Form";

import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";

const Individual3 = () => {
    const [nationality, setNationality] = useState("");
    const [martitalStatus, setMaritalStatus] = useState("");
    const [isNRN, setIsNRN] = useState(false);
    const [isMinor, setIsMinor] = useState(false);
    const [birthDateAD, setBirthDateAD] = useState("");
    const [birthDateBS, setBirthDateBS] = useState("");
    const dateInputRef = useRef(null);



    const handleChange = (e) => {
        setBirthDateAD(e.target.value);
        setBirthDateBS(e.target.value);

      };
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Individual Information & Details
      </h1>
      <div className="grid grid-rows-4 grid-cols-2 gap-8 w-full">


          {/* Row 1 */}
          <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Birth A.D
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
          value={birthDateAD}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>

    <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Birth B.S.
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
          value={birthDateBS}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>

      {/* Row 2 */}
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="fatherName"
              label="Father's Name"
              placeholder="Father's Name"
            />
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="motherName"
              label="Mother's Name"
              placeholder="Mother's Name"
              />

      {/* Row 3 */}
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="grandfatherName"
              label="Grandfather's Name"
              placeholder="Grandfather's Name"
              />
  
  <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="text"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
      Marital Status
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="countryType"
          value={martitalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" defaultValue="Nepal" className="text-[#E0E0E0] bg-black">
         Select Marital Status
          </option>
          <option className="text-[#E0E0E0] bg-black">
              Single
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Married
          </option>
          <option className="text-[#E0E0E0] bg-black">
           Divorced
          </option>
        </select>

      </div>
    </div>

      {/* Row 4 */}
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

    <div className="flex flex-row gap-32 ms-24 ">
  {/* Is User NRN Section */}
  <div className="flex flex-col items-center gap-2">
    <label className="text-[#828282] font-roboto text-base font-normal leading-4">
      Is user NRN?
    </label>
    <div className="flex items-center gap-3 mt-8">
      <span className={`font-medium ${!isNRN ? "text-[#BDBDBD]" : "text-gray-400"}`}>
        No
      </span>
      <button
        onClick={() => setIsNRN(!isNRN)}
        className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
          isNRN ? "bg-[#F1F510]" : "bg-gray-500"
        }`}
      >
        <div
          className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
            isNRN ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`font-medium ${isNRN ? "text-[#BDBDBD]" : "text-gray-400"}`}>
        Yes
      </span>
    </div>
  </div>

  {/* Is User Minor Section */}
  <div className="flex flex-col items-center gap-2">
    <label className="text-[#828282] font-roboto text-base font-normal leading-4">
      Is user a minor?
    </label>
    <div className="flex items-center gap-3  mt-8">
      <span className={`font-medium ${!isMinor ? "text-[#BDBDBD]" : "text-gray-400"}`}>
        No
      </span>
      <button
        onClick={() => setIsMinor(!isMinor)}
        className={`w-16 h-8 flex items-center px-1 rounded-full transition duration-300 ${
          isMinor ? "bg-[#F1F510]" : "bg-gray-500"
        }`}
      >
        <div
          className={`w-6 h-6 bg-black rounded-full shadow-md transform transition ${
            isMinor ? "translate-x-8" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`font-medium ${isMinor ? "text-[#BDBDBD]" : "text-gray-400"}`}>
        Yes
      </span>
    </div>
  </div>
</div>



 
  </div>
 </div>
 </div>



  );
};

export default Individual3;

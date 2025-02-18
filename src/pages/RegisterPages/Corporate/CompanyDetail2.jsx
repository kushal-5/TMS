import { useState,useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import {NepaliDatePicker} from "nepali-datepicker-reactjs";
import Form from "../../../components/ui/signin/Form";

import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";

const CompanyDetails2 = () => {
    const [countryType, setcountryType] = useState("");
    const [businessType, setbusinnessType] = useState("");
    const [companyRegistrationDateAD, setCompanyRegistrationDateAD] = useState("");
    const [companyRegistrationDateBS, setCompanyRegistrationDateBS] = useState("");
    const [dateOfIncorporationAD, setdateOfIncorporationAD] = useState("");
    const [dateOfIncorporationBS, setdateOfIncorporationBS] = useState("");
    const dateInputRef = useRef(null);
    const datePickerRef = useRef(null);


    const handleChange = (e) => {
        setCompanyRegistrationDateAD(e.target.value);
        setCompanyRegistrationDateBS(e.target.value);
        setdateOfIncorporationAD(e.target.value);
        setdateOfIncorporationBS(e.target.value)
      };
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Corporate Information & Details
      </h1>
      <div className="grid grid-rows-5 grid-cols-2 gap-8 w-full">


          {/* Row 1 */}
          <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Incorporation A.D
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
          value={companyRegistrationDateAD}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>

    <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Incorporation B.S.
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
          value={companyRegistrationDateBS}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>

      {/* Row 2 */}
      <Form
              htmlFor="number"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="number"
              id="number"
              label="Contact Number"
              placeholder="Contact Number"
            />
      <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="name"
              label="Company CEO Name"
              placeholder="Company CEO Name"
              />

      {/* Row 3 */}
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="Secretaryname"
              label="Company Secretary Name"
              placeholder="Company Secretary Name"
              />
  
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              type="name"
              id="Officename"
              label="Company Registration Office"
              placeholder="Company Registration Office"
              />

      {/* Row 4 */}
      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="countryType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
       Country Of Registre=atioin
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="countryType"
          value={countryType}
          onChange={(e) => setcountryType(e.target.value)}
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
        htmlFor="businessType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
      Type of Business
      </label>

      {/* Styled Select Box */}
      <div className="relative w-[476px]">
        <select
          id="businessType"
          value={businessType}
          onChange={(e) => setbusinnessType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
            Select  Type
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
          Manufacturing
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
            Service Oriented
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          SHARE INVESTMENT
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
        INVESTMENT
          </option>
        </select>

      </div>
    </div>

      {/* Row 5 */}
      <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Incorporation A.D
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
          value={dateOfIncorporationAD}
          onChange={handleChange}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
          border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>

    <div className="w-full relative">
      <label className="text-[#828282] font-roboto text-base font-normal leading-4">
        Date of Incorporation B.S.
      </label>
      <div className="relative bg-black">
        {/* Calendar Icon */}
        <img
          src={CalendarIcon}
          alt="calendar"
          className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => datePickerRef.current?.focus()} // ✅ Opens the calendar when clicked
        />

        {/* Nepali Date Picker */}
        <NepaliDatePicker
          inputRef={datePickerRef} // ✅ Assign ref here
          value={dateOfIncorporationBS}
          onChange={(date) => setDateOfIncorporationBS(date)}
          options={{
            calenderType: "BS",
          }}
          className="text-white font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
        />
      </div>
    </div>
    </div>
              </div>
  );
};

export default CompanyDetails2;

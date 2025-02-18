import { useState } from "react";
import Form from "../../../components/ui/signin/Form";
import Sms from "../../../assets/images/signinImages/sms.svg";

const GeneralInfo = () => {
  const [clientType, setClientType] = useState(""); // Store selected client type

  return (
    <div className="relative flex flex-col items-start justify-start h-screen text-white overflow-hidden pb-20 mr-56">
      <div className="mt-44">
        <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
          General Information & Details
        </h1>

        {/* Grid with 2 Rows */}
        <div className="grid grid-rows-2 gap-6">
          {/* Row 1: Client Type + Email */}
          <div className="flex gap-8">
            {/* Client Type */}
            <div className="flex flex-col gap-4 w-[426px]">
              <label htmlFor="clientType" className="text-[#828282] font-roboto text-base font-normal leading-4 py-0">
                Client Type
              </label>

              <select
                id="clientType"
                value={clientType}
                onChange={(e) => setClientType(e.target.value)}
                className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-base font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
                rounded-md py-2 px-3 cursor-pointer"
              >
                <option value="" disabled className="text-[#E0E0E0] bg-black">
                  Select Client Type
                </option>
                <option value="corporate" className="text-[#E0E0E0] bg-black">
                  Corporate
                </option>
                <option value="individual" className="text-[#E0E0E0] bg-black">
                  Individual
                </option>
                <option value="mutual" className="text-[#E0E0E0] bg-black">
                  Mutual
                </option>
              </select>
            </div>

            {/* Email */}
            <Form
              htmlFor="email"
              className="ml-12"
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-base font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-[1.5rem] px-2"
              src={Sms}
              type="email"
              id="email"
              label="Email"
              placeholder="Enter your email"
            />
          </div>

          {/* Row 2: Mobile Number + PAN Number */}
          <div className="flex gap-8">
            {/* Mobile Number */}
            <Form
              htmlFor="mobileNumber"
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-base font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-[1.5rem] px-2"
              type="number"
              id="mobileNumber"
              label="Mobile Number"
              placeholder="Mobile Number"
            />

            {/* PAN Number */}
            <Form
              htmlFor="panNumber"
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[47px] h-[60px] text-base font-normal bg-black border-b border-[.1px] 
              border-[#BDBDBD] rounded-md py-[1.5rem] px-2"
              type="number"
              id="panNumber"
              label="PAN Number"
              placeholder="PAN Number"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default GeneralInfo;

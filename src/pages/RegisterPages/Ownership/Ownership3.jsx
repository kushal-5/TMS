import { useState } from "react";
import Form from "../../../components/ui/signin/Form";

const Ownership3 = () => {
    const [addressType, setAddressType] = useState("");
    const [countryType, setCountryType] = useState("");
    const [provinceType,setProvinceType] =useState("");
    const [districtType, setDistrictType]= useState("")
    const [municipality, setMunicipality] = useState("")

    
      
  return (
    <div  
    className="mr-40">
           <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Ownership Information & Details
      </h1>
      <div className="grid grid-rows-5 grid-cols-2 gap-8 w-full">


          {/* Row 1 */}
      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="countryType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
     Select Address Type
      </label>

          <div className="relative w-[476px]">
        <select
          id="countryType"
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select Address Type
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
       Select Country
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



      {/* Row 2 */}
      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="provinceType"
        className="text-[#828282] font-roboto text-base font-normal leading-4"
      >
     Select Province
      </label>

          <div className="relative w-[476px]">
        <select
          id="proviceType"
          value={provinceType}
          onChange={(e) => setProvinceType(e.target.value)}
          className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] 
          rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
        >
          <option value="" disabled className="text-[#E0E0E0] bg-black">
          Select Province
          </option>
          <option value="private" className="text-[#E0E0E0] bg-black">
              Province 1
          </option>
          <option value="public" className="text-[#E0E0E0] bg-black">
          Province 2
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Province 3
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Province 4
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Province 5
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Province 6
          </option>
          <option value="government" className="text-[#E0E0E0] bg-black">
          Province 7
          </option>
        </select>
        </div>
        </div>
   

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

      {/* Row 3 */}
      <div className="flex flex-col gap-4 w-[426px]">
      {/* Label */}
      <label
        htmlFor="countryType"
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

      {/* Row 4 */}
   
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

              
            <Form
              htmlFor="name"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
             type="text" 
              id="postalCode"
              label="Postal Code"
              placeholder="Postal Code"
              />

      {/* Row 5 */}
      <Form
              htmlFor="number"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
             type="number" 
              id="number1"
              label="Phone Number 1."
              placeholder="Phone Number 1."
              />

<Form
              htmlFor="number"
              className="w-[476px] "
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
             type="number"
              id="number2"
              label="Phone Number 2."
              placeholder="Phone Number 2."
              />
            </div>
              </div>
  );
};

export default Ownership3;

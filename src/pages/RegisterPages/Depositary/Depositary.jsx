import { useState } from "react";
import FormInput from "../../../components/ui/signin/Form";


const Depositary = () => {

      
  return (
    <div  
    className="mr-40 mb-96 ">
           <h1 className="text-white w-full font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
          Depositary Details (Beneficiary Owner Identity Number)
      </h1>
      <div className=" gap-12 w-full">
      <FormInput
            htmlFor="text"
            className="w-full"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-3"
            inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[] rounded-md py-[1.5rem] px-2"
            type="text"
            id="Boid"
            label="BOID"
            placeholder="BOID"
          
          />
    </div>  
 </div>
  );
};

export default Depositary;

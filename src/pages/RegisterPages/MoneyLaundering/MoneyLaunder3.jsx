import React, { useState } from 'react';

const MoneyLaunder3=()=>{

    const [selected, setSelected] = useState(null);

    const handleClick = (option) => {
      setSelected(option);
    };
  
    return(
       <div className="mr-80 sticky top-0 bg-black z-10 p-4 mb-60">
            <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px]  text-start mb-20">
          Money Laundering Prevention
            </h1>
            <div className="flex flex-col items-center gap-20">
         <label className="text-white font-roboto text-2xl mr-96 font-normal leading-normal tracking-[0.96px] capitalize">
           Do You Have A Beneficiary?</label>
          <div className="flex gap-8 items-center">
          <div 
          onClick={() => handleClick('yes')}
          className={`w-[114px] h-[114px] rounded-full flex items-center border-b border-[2px] border-[#4F4F4F] justify-center cursor-pointer transition-colors ${
            selected === 'yes' 
              ? 'bg-[#01BAEF] text-[#4F4F4F]' 
              : 'bg-black border-2 border-[#4F4F4F] text-[#4F4F4F] hover:bg-[#4F4F4F]'
          } text-[#4F4F4F] font-roboto text-3xl font-normal leading-[140%] capitalize`}
        >
          Yes
        </div>
        
        <div 
          onClick={() => handleClick('no')}
          className={`w-[114px] h-[114px] rounded-full flex items-center justify-center cursor-pointer transition-colors ${
            selected === 'no'
              ? 'bg-[#01BAEF] text-[#4F4F4F]'
              : 'bg-black border-2 border-[#4F4F4F] text-[#4F4F4F] hover:bg-[#4F4F4F]'
          } text-[#4F4F4F] font-roboto text-3xl font-normal leading-[140%] capitalize`}
        >
          No
        </div>
      </div>
    </div>
 </div>
    )
}

export default MoneyLaunder3
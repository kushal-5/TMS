import React, { useState } from 'react';

const Individual1 = () => {
    const [detailsList, setDetailsList] = useState([
        { id: 1, firstName: '', middleName: '', lastName: '' }
    ]);

    const handleChange = (id, field, value) => {
        setDetailsList((prevDetails) =>
            prevDetails.map((detail) =>
                detail.id === id ? { ...detail, [field]: value } : detail
            )
        );
    };

  
    return (
        <div className="mr-40 sticky top-0 bg-black z-10 p-4 mb-60">
              <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px]  text-start mb-20">
               Individual Information & Details
            </h1>
            <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px]  text-start mb-20">
                What is your name?
            </h1>
            <div>
                {detailsList.map(({ id, firstName, middleName, lastName }) => (
                    <div key={id} className='flex flex-row gap-4 mb-4'>
                        <div className="w-[274px] h-[121px] ">
                            <label htmlFor={`firstName-${id}`} className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize">First Name</label>
                            <input
                            className='bg-black text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize w-[240px] h-[99px] border-[#828282] border-b-[1px] '
                                type="text"
                                id={`firstName-${id}`}
                                value={firstName}
                                onChange={(e) => handleChange(id, "firstName", e.target.value)}
                                required
                            />
                        </div>
                        <div className="w-[274px] h-[121px] ">
                            <label htmlFor={`middleName-${id}`} className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize">Second Name:</label>
                            <input
                            className='bg-black text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize w-[240px] h-[99px] border-[#828282] border-b-[1px]'
                                type="text"
                                id={`middleName-${id}`}
                                value={middleName}
                                onChange={(e) => handleChange(id, "middleName", e.target.value)}
                                
                            />
                        </div>
                        <div className="w-[274px] h-[121px] ">
                            <label htmlFor={`lastName-${id}`} className="text-[#828282] font-roboto text-xl font-normal tracking-[0.8px] capitalize">Last Name:</label>
                            <input
                            className='bg-black  w-[240px] h-[99px] border-[#828282] border-b-[1px] text-white font-roboto text-[48px] font-normal tracking-[1.92px] capitalize'
                                type="text"
                                id={`lastName-${id}`}
                                value={lastName}
                   
                                onChange={(e) => handleChange(id, "lastName", e.target.value)}
                                required
                            />
                        </div>
                    </div>
                ))}
            
            </div>
        </div>
    );
};

export default Individual1;

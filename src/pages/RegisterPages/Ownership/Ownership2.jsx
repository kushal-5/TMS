import { useState } from "react";
import FormInput from "../../../components/ui/signin/Form";
import Sms from "../../../assets/images/signinImages/sms.svg";

const Ownership2 = () => {
  const [detailsList, setDetailsList] = useState([
    { id: 1, firstDesignation: "", fatherName: "", grandfatherName: "", panNumber: "", email: "" },
  ]);

  // Handle input changes
  const handleChange = (id, field, value) => {
    setDetailsList((prevDetails) =>
      prevDetails.map((detail) =>
        detail.id === id ? { ...detail, [field]: value } : detail
      )
    );
  };

  // Add new ownership details
  const handleAddNew = () => {
    if (detailsList.length < 3) {
      setDetailsList((prevDetails) => [
        ...prevDetails,
        {
          id: prevDetails.length + 1,
          firstDesignation: "",
          fatherName: "",
          grandfatherName: "",
          panNumber: "",
          email: "",
        },
      ]);
    }
  };

  return (
    <div className="mr-40">
      <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Ownership Information & Details
      </h1>

      {/* Render details for each item in detailsList */}
      {detailsList.map(({ id, firstDesignation, fatherName, grandfatherName, panNumber, email }) => (
        <div key={id} className="grid grid-rows-5 grid-cols-2 gap-8 w-full mb-8">
          {/* Designation Dropdown */}
          <div className="flex flex-col gap-4 w-[476px]">
            <label
              htmlFor={`firstDesignation-${id}`}
              className="text-[#828282] font-roboto text-lg font-normal leading-4"
            >
              Designation
            </label>
            <div className="relative w-[476px]">
              <select
                id={`firstDesignation-${id}`}
                value={firstDesignation}
                onChange={(e) => handleChange(id, "firstDesignation", e.target.value)}
                className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
              >
                <option value="" disabled className="text-[#E0E0E0] bg-black">
                  Select Designation
                </option>
                <option value="Director" className="text-[#E0E0E0] bg-black">
                  Director
                </option>
                <option value="Chairman" className="text-[#E0E0E0] bg-black">
                  Chairman
                </option>
                <option value="Board Member" className="text-[#E0E0E0] bg-black">
                  Board Member
                </option>
                <option value="CEO" className="text-[#E0E0E0] bg-black">
                  CEO
                </option>
              </select>
            </div>
          </div>

          {/* Father Name Input */}
          <FormInput
            htmlFor={`fatherName-${id}`}
            className="w-[476px]"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
            inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[] rounded-md py-[1.5rem] px-2"
            type="text"
            id={`fatherName-${id}`}
            label="Father Name"
            placeholder="Father Name"
            value={fatherName}
            onChange={(e) => handleChange(id, "fatherName", e.target.value)}
          />

          {/* Grandfather Name Input */}
          <FormInput
            htmlFor={`grandfatherName-${id}`}
            className="w-[476px]"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
            inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[] rounded-md py-[1.5rem] px-2"
            type="text"
            id={`grandfatherName-${id}`}
            label="Grandfather Name"
            placeholder="Grandfather Name"
            value={grandfatherName}
            onChange={(e) => handleChange(id, "grandfatherName", e.target.value)}
          />

          {/* Pan Number Input */}
          <FormInput
            htmlFor={`panNumber-${id}`}
            className="w-[476px]"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
            inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[] rounded-md py-[1.5rem] px-2"
            type="number"
            id={`panNumber-${id}`}
            label="Pan Number"
            placeholder="Pan Number"
            value={panNumber}
            onChange={(e) => handleChange(id, "panNumber", e.target.value)}
          />

          {/* Email Input */}
          <FormInput
            htmlFor={`email-${id}`}
            src={Sms}
            className="w-[476px]"
            labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
            inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[] rounded-md py-[1.5rem] px-2"
            type="email"
            id={`email-${id}`}
            label="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChange(id, "email", e.target.value)}
          />
        </div>
      ))}

      {/* Add New Ownership Details Button */}
      <div className="bottom-40">

      <button
        onClick={handleAddNew}
        className="flex flex-col items-start gap-4 w-[580px]"
        >
        + Add New Ownership Details
      </button>
        </div>
    </div>
  );
};

export default Ownership2;
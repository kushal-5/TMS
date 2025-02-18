import { useState, useRef } from "react";
import "nepali-datepicker-reactjs/dist/index.css";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import Form from "../../../components/ui/signin/Form";
import CalendarIcon from "../../../assets/images/registrationImages/calendar.svg";

const Ownership4 = () => {
  const [districtType, setDistrictType] = useState("");

  const dateInputRef = useRef(null);

  const [detailsList, setDetailsList] = useState([
    { id: 1, citizenship: '', issueDistrict: '', issueAD: '', issueBS: "", experience: "", qualification: "", eduQualification: "" }
  ]);

  const handleChange = (id, field, value) => {
    setDetailsList((prevDetails) =>
      prevDetails.map((detail) =>
        detail.id === id ? { ...detail, [field]: value } : detail
      )
    );
  };

  const handleAddNew = () => {
    if (detailsList.length < 3) {
      setDetailsList((prevDetails) => [
        ...prevDetails,
        { id: prevDetails.length + 1, citizenship: '', issueDistrict: '', issueAD: '', issueBS: "", experience: "", qualification: "", eduQualification: "" }
      ]);
    }
  };

  return (
    <div className="mr-40">
      <h1 className="text-white font-roboto text-[48px] font-medium leading-none tracking-[1.92px] mb-20 text-start">
        Ownership Information & Details
      </h1>
      <div className="grid grid-rows-4 grid-cols-2 gap-8 w-full" >
        {detailsList.map((detail) => (
        
          <>
            {/* Row 1 */}
            <Form
                 labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
                 inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
                 border-[] rounded-md py-[1.5rem] px-2"
              key={`citizenship-${detail.id}`}
              id={`citizenship-${detail.id}`}
              label="Citizenship Number"
              placeholder="Citizenship Number"
              type="number"
              value={detail.citizenship}
              onChange={(e) => handleChange(detail.id, "citizenship", e.target.value)}
            />

            <div className="flex flex-col gap-4 w-[426px]" id={`issueDistrict-${detail.id}`}>
              <label htmlFor="countryType" className="text-[#828282] font-roboto text-base font-normal leading-4">
                Citizenship Issue District
              </label>
              <div className="relative w-[476px]">
                <select
                  id="countryType"
                  value={districtType}
                  onChange={(e) => setDistrictType(e.target.value)}
                  className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
                >
                  <option value="" className="text-[#E0E0E0] bg-black">Select District</option>
                  <option value="Banke" className="text-[#E0E0E0] bg-black">Banke</option>
                  <option value="Bardiya" className="text-[#E0E0E0] bg-black">Bardiya</option>
                  <option value="Dang" className="text-[#E0E0E0] bg-black">Dang</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full relative" id={`issueAD-${detail.id}`}>
              <label className="text-[#828282] font-roboto text-base font-normal leading-4">
                Citizenship Issue Date A.D
              </label>
              <div className="relative">
                <img
                  src={CalendarIcon}
                  alt="calendar"
                  className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => dateInputRef.current?.showPicker()}
                />
                <input
                  type="date"
                  ref={dateInputRef}
                  value={detail.issueAD}
                  onChange={(e) => handleChange(detail.id, "issueAD", e.target.value)}
                  className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
                />
              </div>
            </div>

            <div className="w-full relative" id={`issueBS-${detail.id}`}>
              <label className="text-[#828282] font-roboto text-base font-normal leading-4">
                Citizenship Issue Date B.S.
              </label>
              <div className="relative">
                <NepaliDatePicker
                  value={detail.issueBS}
                  onChange={(value) => handleChange(detail.id, "issueBS", value)}
                  className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] border-[#BDBDBD] rounded-md py-[1.5rem] px-2 pl-12"
                />
              </div>
            </div>

            {/* Row 3 */}
            <Form
              key={`qualification-${detail.id}`}
              id={`qualification-${detail.id}`}
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              label="Professional Qualification"
              placeholder="Professional Qualification"
              type="text"
              value={detail.qualification}
              onChange={(e) => handleChange(detail.id, "qualification", e.target.value)}
            />

            <Form
              key={`experience-${detail.id}`}
              id={`experience-${detail.id}`}
              labelClassName="text-[#828282] font-roboto text-base font-normal leading-4 py-2"
              inputClassName="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[.1px] 
              border-[] rounded-md py-[1.5rem] px-2"
              label="Professional Experience"
              placeholder="Professional Experience"
              type="text"
              value={detail.experience}
              onChange={(e) => handleChange(detail.id, "experience", e.target.value)}
            />

            {/* Row 4 */}
            <div className="flex flex-col gap-4 w-[426px]" id={`eduQualification-${detail.id}`}>
              <label htmlFor="districtType" className="text-[#828282] font-roboto text-base font-normal leading-4">
                Educational Qualification
              </label>
              <div className="relative w-[476px]">
                <select
                  id="districtType"
                  value={detail.eduQualification}
                  onChange={(e) => handleChange(detail.id, "eduQualification", e.target.value)}
                  className="text-[#BDBDBD] font-roboto w-[476px] h-[60px] text-lg font-normal bg-black border-b border-[#BDBDBD] border-[.1px] rounded-md py-2 px-3 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#BDBDBD] transition-all duration-300"
                >
                  <option value="" className="text-[#E0E0E0] bg-black">Select Qualification</option>
                  <option value="Graduate" className="text-[#E0E0E0] bg-black">Graduate</option>
                  <option value="Undergraduate" className="text-[#E0E0E0] bg-black">Undergraduate</option>
                  <option value="Postgraduate" className="text-[#E0E0E0] bg-black">Postgraduate</option>
                  <option value="Professional" className="text-[#E0E0E0] bg-black">Professional</option>
                </select>
              </div>
            </div>
          </>
        ))}
      </div>

      <button onClick={handleAddNew} className="flex flex-col items-start gap-4 w-[580px] mt-28">
        + Add New Ownership Details
      </button>
    </div>
  );
};

export default Ownership4;
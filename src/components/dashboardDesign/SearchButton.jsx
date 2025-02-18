import { X } from "lucide-react";
import { AiOutlineSearch, AiOutlineInfoCircle } from "react-icons/ai";
import nabilLogo from "../../assets/nabil.png";
import sanimaLogo from "../../assets/sanima.png";
import nimbLogo from "../../assets/hbl.png";
import hblLogo from "../../assets/hbl.png";

const companies = [
  { id: 1, name: "NABIL", value: "NPR 181.23", icon: nabilLogo },
  { id: 2, name: "SANIMA", value: "NPR 181.23", icon: sanimaLogo },
  { id: 3, name: "NIMB", value: "NPR 181.23", icon: nimbLogo },
  { id: 4, name: "HBL", value: "NPR 181.23", icon: hblLogo },
  { id: 5, name: "NABIL", value: "NPR 181.23", icon: nabilLogo },
];

const SearchOptions = ({ onClose, panelRef }) => {
  // Only close the overlay if the backdrop is clicked (not the content)
  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-10"
      onClick={handleContainerClick}
    >
      <div
        ref={panelRef}
        className="bg-[#141414] p-4 w-[800px] max-h-[500px] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by companies"
                className="w-full bg-[#1C1C1C] text-white px-4 py-3 rounded-lg pl-10 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              <AiOutlineSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white ml-4 duration-200"
            aria-label="Close search options"
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400 px-4 py-2">
            <span>Name</span>
            <div className="flex items-center">
              <span className="mr-2">Profitability</span>
              <AiOutlineInfoCircle size={15} />
            </div>
          </div>

          {companies.map((company) => (
            <div
              key={company.id}
              className="flex justify-between items-center px-4 py-3 hover:bg-[#1C1C1C] rounded-lg cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={company.icon}
                  alt={company.name}
                  className="w-8 h-8"
                />
                <span className="text-white">{company.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white">{company.value}</span>
                <AiOutlineInfoCircle size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;

import React, { useState, useRef, useEffect } from 'react';
import { Search, Info, Filter, ChevronDown } from 'lucide-react';
import nabilLogo from "../../assets/nabil.png";
import sanimaLogo from "../../assets/sanima.png";
import nimbLogo from "../../assets/hbl.png";
import hblLogo from "../../assets/hbl.png";
const stockData = [
  { name: 'NABIL', profitability: 'NPR181.23', logo: nabilLogo },
  { name: 'SANIMA', profitability: 'NPR181.23', logo: sanimaLogo },
  { name: 'NIMB', profitability: 'NPR181.23', logo: nimbLogo },
  { name: 'HBL', profitability: 'NPR181.23', logo: hblLogo },
  { name: 'NABIL', profitability: 'NPR181.23', logo: nabilLogo },
  { name: 'SANIMA', profitability: 'NPR181.23', logo: sanimaLogo },
];

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter the stock data based on the search query
  const filteredStockData = stockData.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {!isOpen && (
        // Search Input Field when closed
        <div
          className="flex items-center bg-[#1D1D1D] ms-5  mt-4 border border-[#828282] rounded-md cursor-pointer w-[300px]"
          onClick={() => setIsOpen(true)}
        >
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            readOnly
            className="flex-grow bg-transparent border-none text-zinc-400 p-2.5 text-sm focus:outline-none pl-4 cursor-pointer"
          />
          {/* Search Icon */}
          <Search className="h-5 w-5 text-zinc-400 mr-3" />
        </div>
      )}

      {isOpen && (
        // Background Div covers the search input and dropdown content
        <div
          className="bg-[#1D1D1D] rounded-lg p-3 mt-5 ms-5  mb-5 w-[300px]"
          ref={dropdownRef}
        >
          {/* Search Input Field when open */}
          <div
            className={`flex items-center bg-[#1D1D1D] border border-[#828282] rounded-lg cursor-pointer ${
              isOpen ? ' ' : ''
            }`}
          >
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="flex-grow bg-transparent text-zinc-400 p-2.5 text-sm focus:outline-none pl-4"
            />
            {/* Search Icon */}
            <Search className="h-5 w-5 text-zinc-400 mr-3" />
          </div>

          {/* Dropdown Content */}
          <div className="bg-[1D1D1D] mt-2 rounded-b-md">
            {/* Filters */}
            <div className="flex p-2 space-x-2 overflow-x-hidden">
              {['Profitability', 'Favorites', 'Any P'].map((filter) => (
                <button
                  key={filter}
                  className="-ms-2 flex items-center h-10 w-32 border border-[#333333] bg-[1D1D1D] text-zinc-300 text-xs px-3 py-1.5 rounded-lg"
                >
                  <Filter className="h-4 w-4 mr-1.5" />
                  {filter}
                  {/* Dropdown Indicator */}
                  <ChevronDown className="h-4 w-4 ml-1.5" />
                </button>
              ))}
            </div>
            {/* Stock List */}
            <div className="py-1">
              <div className="flex justify-between px-4 py-2 text-xs text-zinc-500">
                <span>Name</span>
                <div className="flex items-center">
                  <span className="mr-1">Profitability</span>
                  {/* Info Icon */}
                  <Info className="h-4 w-4" />
                </div>
              </div>
              {filteredStockData.length > 0 ? (
                filteredStockData.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-2 hover:bg-zinc-700/30"
                  >
                    <div className="flex items-center">
                      <img
                        src={stock.logo}
                        alt={stock.name}
                        className="w-8 h-8 mr-3 rounded"
                      />
                      <span className="text-sm text-white">{stock.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-[#828282] mr-3">
                        {stock.profitability}
                      </span>
                      <button className="w-5 h-5 rounded-full bg-[#1D1D1D] text-[#828282] text-xs flex items-center justify-center">
                        <Info />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-zinc-500">
                  No stocks found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;

import { useState, useEffect } from "react";
import { Plus, ChevronDown, User } from "lucide-react";
import TradingSymbol from "./TradingSymbol";
import UserMenu from "@/components/userSection/UserMenu";

const Header = ({ tradingSymbols }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen]);

  return (
    <header className="flex items-center gap-20 p-5 border-b border-gray-600 bg-black ">
      {/* Left side - Trading symbols */}
      <div className="flex items-center gap-4 w-[41%] 2xl:w-[1409px]">
        <button className="bg-[#141414] h-[44px] min-w-[44px] p-1 rounded-lg flex justify-center items-center hover:bg-gray-600">
          <Plus size={30} className="text-gray-300" />
        </button>
        <div
          id="slider"
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {tradingSymbols.map((symbol, index) => (
            <div
              key={index}
              className="flex-none"
              style={{ scrollSnapAlign: "start" }}
            >
              <TradingSymbol
                name={symbol.name}
                logo={symbol.logo}
                currency={symbol.currency}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Account, Payment, User */}
      <div className="flex items-center gap-6">
        {/* Account Balance */}
        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-300">NRP 0.00</div>
            <div className="text-xs text-gray-400">NRP Account</div>
          </div>
          <ChevronDown className="text-gray-300" />
        </div>

        {/* Payment Button */}
        <button className="bg-[#F1F510] w-[95px] text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
          Payments
        </button>

        {/* User Menu */}
        <div className="relative user-menu-container">
          <button
            className="bg-[#141414] h-[44px] w-[44px] p-1 rounded-lg flex justify-center items-center hover:bg-gray-600 transition-colors"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <User size={30} className="text-gray-300" />
          </button>
          <UserMenu
            isOpen={isUserMenuOpen}
            onClose={() => setIsUserMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

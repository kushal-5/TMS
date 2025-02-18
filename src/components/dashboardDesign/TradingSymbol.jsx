import React from "react";
import { X } from "lucide-react";

const TradingSymbol = ({ name, logo, currency }) => (
  <div className="relative flex items-center space-x-2 p-2 bg-[#141414] rounded-lg w-[160px] h-[r5px] hover:bg-[#333333] transition-colors duration-200 group">
    <img src={logo} alt={name} className="w-6 h-6 rounded-full" />
    <div className="flex-1">
      <div className="text-white text-sm font-semibold">{name}</div>
      <div className="text-gray-400 text-xs">{currency}</div>
    </div>
    <X
      size={14}
      className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 cursor-pointer"
    />
  </div>
);

export default TradingSymbol;

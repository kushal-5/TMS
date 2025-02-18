import { UilListUl, UilExchange, UilCalendarAlt } from "@iconscout/react-unicons"

const NetInfo = () => {
  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="grid grid-cols-2  gap-y-6 mb-6 max-w-[960px]">
        {/* STATUS */}
        <div className="relative w-[466px]">
          <UilListUl className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">STATUS</label>
          <select className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white">
            <option value="">Select Status</option>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* BUY OR SELL */}
        <div className="relative w-[466px]">
          <UilExchange className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">BUY OR SELL</label>
          <select className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white">
            <option value="all">All</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        {/* BUSINESS DATE FROM */}
        <div className="relative w-[466px]">
          <UilCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">BUSINESS DATE FROM</label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white"
          />
        </div>

        {/* BUSINESS DATE TO */}
        <div className="relative w-[466px]">
          <UilCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#828282]" />
          <label className="absolute top-2 left-[52px] text-[#828282] text-sm">BUSINESS DATE TO</label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="bg-[#141414] border border-[#4F4F4F] p-2 pt-6 pl-12 rounded-lg w-full h-[63px] text-white"
          />
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="flex gap-4">
        <button className="bg-[#F1F510] text-gray-900 px-4 py-2 rounded">FILTER</button>
        <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded">CLEAR FILTER</button>
      </div>
    </div>
  )
}

export default NetInfo


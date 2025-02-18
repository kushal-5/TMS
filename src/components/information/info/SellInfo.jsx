import { UilListUl, UilExchange, UilCalendarAlt } from "@iconscout/react-unicons"
const navItemClass = "border px-5 pt-2 pb-2 w-[136px] h-[48px] border-black text-center";
const SellInfo = () => {
  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="">
        <nav className="flex space-x-3 -mt-5 mb-9">
            <ul className=" border px-5 pt-2 pb-2 w-[150px] h-[48px] bg-[#01BAEF] border-black text-center text-lg ">Payment Due</ul>
            <ul className={navItemClass}>Sucess</ul>
            <ul className={navItemClass}>In Progress</ul>
        </nav>
      </div>
      <div className="grid grid-cols  gap-y-6 mb-6 max-w-[960px]">
        {/* STATUS */}
        

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
        <button className="bg-[#F1F510] text-gray-900 px-4 py-2 rounded">SEARCH </button>
        <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded">CLEAR FILTER</button>
      </div>
    </div>
  )
}

export default SellInfo


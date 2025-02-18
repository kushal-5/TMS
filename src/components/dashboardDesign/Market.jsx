import { X } from "lucide-react"
import marketWatch from "../../assets/market_watch.png"
import marketDepth from "../../assets/market_depth.png"
import news from "../../assets/news.png"
import OrderItem from "../item/OrderItem"

const Market = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-[88px] bg-[#141414] p-4 space-y-6 w-[300px] h-screen z-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Market</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white  duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>
      <OrderItem imageSrc={marketWatch} altText="Market Watch" title="Market Watch" bgColorClass="from-[#2E59E51A] to-[#2E59E599]" />
      <OrderItem
        imageSrc={marketDepth}
        altText=" Market Depth"
        title="Market Depth"
        bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
      />
      <OrderItem
        imageSrc={news}
        altText="News"
        title="News"
        bgColorClass="from-[#35C0951A] to-[#35C095]"
      />
    </div>
  )
}

export default Market


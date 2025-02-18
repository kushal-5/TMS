import { X } from "lucide-react"
import buySell from "../../assets/sell_buy.png"
import orderBook from "../../assets/order_book.png"
import dailyOrder from "../../assets/daily_order.png"
import OrderItem from "../item/OrderItem"

const OrderOptions = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-[88px] bg-[#141414] p-4 space-y-6 w-[300px] h-screen z-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Order</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white  duration-200"
          aria-label="Close order options"
        >
          <X size={24} />
        </button>
      </div>
      <OrderItem imageSrc={buySell} altText="Buy/Sell" title="Buy/Sell" bgColorClass="from-[#2E59E51A] to-[#2E59E599]" />
      <OrderItem
        imageSrc={orderBook}
        altText="Historic Order Book"
        title="Historic Order Book"
        bgColorClass="from-[#33C8F61A] to-[#33C8F6]"
      />
      <OrderItem
        imageSrc={dailyOrder}
        altText="Daily Order Book"
        title="Daily Order Book"
        bgColorClass="from-[#35C0951A] to-[#35C095]"
      />
    </div>
  )
}

export default OrderOptions


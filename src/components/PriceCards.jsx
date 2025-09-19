// PriceCards.jsx
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PriceCards() {

    
const PriceCard = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    icon: <TrendingUp/>,
    bg: "bg-[#E3F5FF]",
    
  },
  {
    label: "Orders",
    value: "1,219",
    change: "-0.03%",
    icon: <TrendingDown/>,
    bg: "bg-[#F7F9FB]",
    
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    icon: <TrendingUp/>,
     bg: "bg-[#F7F9FB]",
    
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    icon: <TrendingUp/>,
    bg: "bg-[#E5ECF6]",
    
  }
];


  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 max-w-2xl mx-auto">
      {PriceCard.map((card, i) => (
        <div
          key={card.label}
          className={`rounded-2xl ${card.bg}  p-4 min-w-[135px]`}
        >
          <div className="text-xl font-semibold text-black mb-4">{card.label}</div>
          <div className="flex gap-4 items-center justify-between">          
          <div className={`text-2xl md:text-3xl font-semibold`}>{card.value}</div>
          <div className="flex items-center text-md font-semibold text-black">
            <span>
              {card.change}
            </span>
            <span className="ml-1 w-12">{card.icon}</span>
          </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}

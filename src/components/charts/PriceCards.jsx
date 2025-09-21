// PriceCards.jsx
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PriceCards() {

    
const PriceCard = [
  {
    label: "Customers",
    value: "3,781",
    change: "+11.01%",
    textColor:"text-black",
    icon: TrendingUp,
    bg: "bg-[#E3F5FF] ",
    
  },
  {
    label: "Orders",
    value: "1,219",
    textColor:"text-black dark:text-white",
    change: "-0.03%",
    icon: TrendingDown,
    bg: "bg-[#F7F9FB] dark:bg-[#ffffff]/5",
    
  },
  {
    label: "Revenue",
    value: "$695",
    change: "+15.03%",
    textColor:"text-black dark:text-white",
    icon: TrendingUp,
     bg: "bg-[#F7F9FB] dark:bg-[#ffffff]/5",
    
  },
  {
    label: "Growth",
    value: "30.1%",
    change: "+6.08%",
    textColor:"text-black",
    icon: TrendingUp,
    bg: "bg-[#E5ECF6]",
    
  }
];


  return (
    
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-[28px]'>
      {
        PriceCard.map((card, id)=>{
          
         const Icon = card.icon;
  return (          
          <div key={id}className={`rounded-2xl px-[24px] h-[112px] flex flex-col justify-center ${card.bg}`}>
            <h2 className={`font-semibold text-[14px]  ${card.textColor}`}>{card.label}</h2>
            <div className='flex items-center mt-[20px] justify-between'>
              <h2 className={`font-semibold text-[24px] ${card.textColor}`}>{card.value}</h2>
              <span className={`text-[12px] ${card.textColor} gap-2 flex items-center justify-between`}>
                {card.change} 
                <Icon className={`h-3 w-3  ${card.textColor}`}/>
              </span>
            </div>
          </div>
        )})
      }
      
      

    </div>
    
  );
}

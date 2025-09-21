import { Dot } from "lucide-react"; // Lucide react icon
import map from "../../assets/World-Map.svg"
const locations = [
  { label: "New York", value: 72, left: "31%", top: "35%" },
  { label: "San Francisco", value: 39, left: "13%", top: "37%" },
  { label: "Sydney", value: 25, left: "83%", top: "86%" },
  { label: "Singapore", value: 61, left: "78%", top: "58%" },
];

const maxVal = Math.max(...locations.map(l => l.value));

export default function RevenueByLocationCard() {
  return (
    <div className="bg-[#F7F9FB] dark:bg-[#ffffff]/5 rounded-2xl p-3" >
      <div className="font-semibold text-black dark:text-white mb-4">Revenue by Location</div>
      <div className="relative w-full flex items-center justify-center mb-2">      
       <img src={map} alt="map" className="w-[154px] h-[82px]" />    
       
      </div>

      {/* Location revenue bars */}
      <ul className="flex flex-col gap-1">
        {locations.map((loc) => (
          <li key={loc.label} className="items-center justify-between">
            <span className="text-[12px] text-black dark:text-white font-semibold">{loc.label}</span>
            <span className="flex items-center justify-center">

            
                <div className="flex-1 mr-2 bg-gray-100 h-1 rounded">
                <div
                    className="bg-blue-200 h-1 rounded"
                    style={{ width: `${(loc.value / maxVal) * 100}%` }}
                ></div>
                </div>
                <span className="text-[12px] text-black dark:text-white font-semibold tabular-nums">{loc.value}K</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

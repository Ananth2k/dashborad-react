// RevenueLineChart.jsx
import React from "react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const prevWeek = [12, 19, 14, 11, 18, 24];
const currWeek = [18, 10, 9, 16, 17, 21];
const maxValue = 30;

export default function RevenueLineChart() {
  // Helper to convert value to SVG Y-coord
  const getY = v => 200 - (v / maxValue) * 160;

  // Build smooth path using cubic bezier
  const buildPath = arr => {
    let d = `M 48,${getY(arr[0])}`;
    for (let i = 1; i < arr.length; i++) {
      const x1 = 48 + ((i - 1) * 88) + 44;
      const x2 = 48 + (i * 88);
      d += ` C ${x1},${getY(arr[i - 1])} ${x2 - 44},${getY(arr[i])} ${x2},${getY(arr[i])}`;
    }
    return d;
  };

  // Full weeks are solid, rest dotted
  const buildPartialPath = arr => {
    // First 4 solid, then dashed for last 2
    let d = `M 48,${getY(arr[0])}`;
    let i;
    for (i = 1; i < 4; i++) {
      const x = 48 + i * 88;
      d += ` L ${x},${getY(arr[i])}`;
    }
    // Dotted segment
    for (; i < arr.length; i++) {
      const x = 48 + i * 88;
      d += ` L ${x},${getY(arr[i])}`;
    }
    return d;
  };

  return (
    <div className="bg-[#F7F9FB] rounded-2xl p-4 max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center gap-6 pb-3 px-2">
        <span className="font-semibold text-gray-800">Revenue</span>
        <span className="flex items-center gap-1 text-gray-600 text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-black mr-1"></span>
          Current Week <span className="font-bold text-gray-900">$58,211</span>
        </span>
        <span className="flex items-center gap-1 text-gray-600 text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-300 mr-1"></span>
          Previous Week <span className="font-bold text-gray-900">$68,768</span>
        </span>
      </div>
      <div className="bg-gray-50 rounded-xl relative overflow-hidden" style={{height: 390}}>
        <svg width="100%" height="450" viewBox="0 0 600 240">
          {/* Y-axis grid lines */}
          {[0,10,20,30].map(v => (
            <g key={v}>
              <line x1="48" x2="550" y1={getY(v)} y2={getY(v)} stroke="#d1d5db" strokeWidth="1" />
              <text x="10" y={getY(v)+5} fill="#cbd5e1" fontSize="13" fontWeight="bold">{v}M</text>
            </g>
          ))}
          {/* Previous Week Line */}
          <path
            d={buildPath(prevWeek)}
            stroke="#93c5fd"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Current Week Line (partial: first 4 solid, last 2 dashed) */}
          <path
            d={buildPartialPath(currWeek).split("L").slice(0,5).join("L")}
            stroke="#111"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={"M"+buildPartialPath(currWeek).split("L").slice(4).join("L")}
            stroke="#111"
            strokeWidth="4"
            fill="none"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          {/* Month labels */}
          {months.map((m,i)=>(
            <text key={m} x={48 + i*88} y={225} textAnchor="middle" fill="#64748b" fontSize="15">
              {m}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}

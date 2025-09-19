import { Circle } from "lucide-react"; // Use for colored legend dots

const salesData = [
  { label: "Direct", value: 300.56, color: "#111111" },
  { label: "Affiliate", value: 135.18, color: "#B9F5CB" },
  { label: "Sponsored", value: 154.02, color: "#90B6F1" },
  { label: "E-mail", value: 48.96, color: "#B9E7F5" },
];

const total = salesData.reduce((sum, d) => sum + d.value, 0);
const mainValue = salesData[0].value; // Show "Direct" in donut center

export default function SalesChart() {
  // Calculating donut segments (SVG circle stroke-dasharray)
  let dashArray = [];
  let dashOffset = 0;
  salesData.forEach((s, i) => {
    const v = Math.round((s.value / total) * 100 * 2.64); // 2.64 ≈ perimeter/percent for r=21
    dashArray.push(v);
  });

  // For displaying percentage centrally
  const centerPercent = ((mainValue / total) * 100).toFixed(1);

  return (
    <div className="bg-gray-50 rounded-2xl p-6 w-full flex flex-col items-center">
      <div className="font-semibold text-base mb-3 text-center w-full">Total Sales</div>
      {/* Donut Chart */}
      <div className="flex flex-col items-center mb-4 w-full">
        <div className="relative w-[90px] h-[90px] mx-auto flex items-center justify-center">
          <svg width={90} height={90} className="" viewBox="0 0 48 48">
            <circle
              cx={24} cy={24} r={21}
              stroke="#ececec"
              strokeWidth={6}
              fill="none"
            />
            {salesData.reduce((acc, s, i) => {
              const v = Math.round((s.value / total) * 100 * 2.64);
              const prev = acc.offset;
              acc.offset += v;
              acc.segments.push(
                <circle
                  key={s.label}
                  cx={24}
                  cy={24}
                  r={21}
                  stroke={s.color}
                  strokeWidth={6}
                  fill="none"
                  strokeDasharray={`${v} ${166 - v}`}
                  strokeDashoffset={-prev}
                  style={{ transition: 'stroke-dasharray 1s' }}
                  strokeLinecap="round"
                />
              );
              return acc;
            }, {offset: 0, segments: []}).segments}
          </svg>
          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 text-xs rounded-lg font-semibold shadow">{centerPercent}%</span>
          </div>
        </div>
      </div>
      {/* Legend */}
      <ul className="w-full mt-2 flex flex-col gap-4">
        {salesData.map((s, i) => (
          <li key={s.label} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Circle size={13} fill={s.color} color={s.color} strokeWidth={0} />
              <span className="text-gray-800">{s.label}</span>
            </div>
            <span className="font-semibold text-gray-800 tabular-nums">${s.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

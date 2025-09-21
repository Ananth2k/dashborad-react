import { Card, CardContent, Typography, Box } from "@mui/material";
import { Circle } from "lucide-react";

const chartData = [
  { label: "Direct", value: 300.56, color: "#111111" },
  { label: "Affiliate", value: 135.18, color: "#B9F5CB" },
  { label: "Sponsored", value: 154.02, color: "#90B6F1" },
  { label: "E-mail", value: 48.96, color: "#B9E7F5" }
];

const total = chartData.reduce((sum, d) => sum + d.value, 0);
const percent = ((chartData[0].value / total) * 100).toFixed(1);

export default function SalesChart() {
  // SVG arc calculation: each segment is shown per data value's proportion
  // (simplified mapping for 360deg donut, r=42, circumference=2πr=264)
  let offset = 0;
  const arcs = chartData.map((d, idx) => {
    const arcLen = (d.value / total) * 264;
    const el = (
      <circle
        key={d.label}
        cx={50}
        cy={50}
        r={42}
        fill="none"
        stroke={d.color}
        strokeWidth={15}
        strokeDasharray={`${arcLen} ${264 - arcLen}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1s" }}
      />
    );
    offset += arcLen;
    return el;
  });

  return (
     <div className="bg-[#F7F9FB] dark:bg-[#ffffff]/5 rounded-2xl">
    <Card sx={{ backgroundColor: 'transparent'}}
    elevation={0} className="rounded-2xl w-full mx-auto p-0">
      <CardContent  >
        <h2 className="text-[#1C1C1C] dark:text-white font-semibold text-[14px] mb-6">
          Total Sales
        </h2>
        <Box className="flex  flex-col items-center my-6">
          <div className="relative w-[120px] h-[120px] flex items-center justify-center mx-auto">
            <svg width="150" height="150" viewBox="0 0 100 100">
              <circle
                cx={50}
                cy={50}
                r={42}
                stroke="rgba(255, 255, 255, 0.01)"
                strokeWidth={20}
                fill="none"
              />
              {arcs}
            </svg>
            {/* Center value */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 text-sm rounded-lg font-semibold shadow">
              {percent}%
            </div>
          </div>
        </Box>
        <ul className="w-full flex flex-col gap-3">
          {chartData.map((d, i) => (
            <li key={d.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Circle size={13} fill={d.color} color={d.color} strokeWidth={0} />
                <span className="text-black dark:text-white text-[12px]">{d.label}</span>
              </div>
              <span className="font-semibold text-black dark:text-white text-[12px] tabular-nums">
                ${d.value.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </div>
  );
}

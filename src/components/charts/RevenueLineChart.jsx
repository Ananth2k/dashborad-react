import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip
} from "recharts";

// Data (values in 'M')
const data = [
  { name: "Jan", current: 13, previous: 5 },
  { name: "Feb", current: 8, previous: 8 },
  { name: "Mar", current: 10, previous: 15 },
  { name: "Apr", current: 16, previous: 8 },
  { name: "May", current: 22, previous: 5 },
  { name: "Jun", current: 21, previous: 15 }
];

// Separate line segments for "prediction" dashed part
const dashedIndex = 3; // Dashed from May onward

function CustomLegend() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-2">
      <h2 className="mr-4 text-black dark:text-white">
        Revenue
      </h2>
      <span className="w-[2px] h-4 bg-gray-300"></span>
      <div className="flex items-center text-sm text-black dark:text-white mr-3">
        <span className="inline-block w-2 h-2 rounded-full bg-black mr-2" />
        Current Week <span className="mx-1 font-bold">$58,211</span>
      </div>
      <div className="flex items-center text-sm text-black dark:text-white">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-200 mr-2" />
        Previous Week <span className="mx-1 font-bold">$68,768</span>
      </div>
    </div>
  );
}

export default function RevenueLineChart() {

  const theme = "dark"
  return (
    <div className="bg-[#F7F9FB] dark:bg-[#ffffff]/5 rounded-2xl">

    
    <Card
      elevation={0}
      sx={{ backgroundColor: 'transparent' }}
    >
      <CardContent className="!p-6 md:!p-4">
        <CustomLegend />
        <div className="relative rounded-xl overflow-hidden w-full" style={{ height: 270 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#cedbe8ff" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#CBD5E1", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis
                domain={[0, 30]}
                ticks={[0, 10, 20, 30]}
                tick={{ fill: "#CBD5E1", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `${v}M`}
              />
              <Tooltip
                contentStyle={{ borderRadius: 10, border: 0, boxShadow: "0 2px 12px #0001" }}
                labelStyle={{ marginBottom: 5, color: "#64748b" }}
                formatter={(val, name) => [`${val}M`, name === "current" ? "Current" : "Previous"]}
              />
              {/* Previous Week: full curved line */}
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#A8C5DA"
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
                activeDot={{ r: 6, fill: "#A8C5DA" }}
              />
              {/* Current Week: solid then dashed after 4th point */}
              {/* Solid part */}
              <Line
                type="monotone"
                dataKey="current"
                stroke={theme === "dark" ? "#FFFFFF" : "#111"}                 
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
                connectNulls
                points={data.slice(0, dashedIndex + 1)}
              />
              {/* Dashed predicted part */}
              <Line
                type="monotone"
                dataKey="current"
                stroke={theme === "dark" ? "#FFFFFF" : "#111"}
                strokeWidth={4}
                dot={false}
                strokeDasharray="7 7"
                data={data.map((d, i) =>
                  i < dashedIndex ? { ...d, current: null } : d
                )}
                isAnimationActive={true}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}

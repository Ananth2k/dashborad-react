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
  { name: "Jan", current: 13, previous: 10 },
  { name: "Feb", current: 8, previous: 20 },
  { name: "Mar", current: 10, previous: 15 },
  { name: "Apr", current: 16, previous: 11 },
  { name: "May", current: 22, previous: 19 },
  { name: "Jun", current: 21, previous: 26 }
];

// Separate line segments for "prediction" dashed part
const dashedIndex = 3; // Dashed from May onward

function CustomLegend() {
  return (
    <Box className="flex flex-wrap items-center gap-4 mb-4">
      <Typography fontWeight={700} className="!mr-4 !text-black">
        Revenue
      </Typography>
      <div className="flex items-center text-sm text-gray-900 mr-3">
        <span className="inline-block w-2 h-2 rounded-full bg-black mr-2" />
        Current Week <span className="mx-1 font-bold">$58,211</span>
      </div>
      <div className="flex items-center text-sm text-gray-900">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-300 mr-2" />
        Previous Week <span className="mx-1 font-bold">$68,768</span>
      </div>
    </Box>
  );
}

export default function RevenueLineChart() {
  return (
    <Card
      elevation={0}
      className="rounded-2xl w-full max-w-4xl mx-auto p-0 bg-gray-50"
    >
      <CardContent className="!p-6 md:!p-8">
        <CustomLegend />
        <div className="relative bg-white rounded-xl overflow-hidden w-full" style={{ height: 270 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#CBD5E1", fontSize: 16 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis
                domain={[0, 30]}
                tick={{ fill: "#CBD5E1", fontSize: 15 }}
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
                stroke="#60A5FA"
                strokeWidth={4}
                dot={false}
                isAnimationActive={true}
                activeDot={{ r: 6, fill: "#60A5FA" }}
              />
              {/* Current Week: solid then dashed after 4th point */}
              {/* Solid part */}
              <Line
                type="monotone"
                dataKey="current"
                stroke="#111"
                strokeWidth={4}
                dot={false}
                isAnimationActive={true}
                connectNulls
                points={data.slice(0, dashedIndex + 1)}
              />
              {/* Dashed predicted part */}
              <Line
                type="monotone"
                dataKey="current"
                stroke="#111"
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
  );
}

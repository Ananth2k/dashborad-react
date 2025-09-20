import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip
} from "recharts";

// Chart Data (values in 'M')
const data = [
  { name: "Jan", actual: 20, projected: 5 },
  { name: "Feb", actual: 22, projected: 5 },
  { name: "Mar", actual: 18, projected: 5 },
  { name: "Apr", actual: 23, projected: 5 },
  { name: "May", actual: 16, projected: 5 },
  { name: "Jun", actual: 22, projected: 5 },
];

export default function ProjectionChart() {
  return (
    <div className="bg-red-300">

    <Card elevation={0} className="rounded-2xl w-full max-w-3xl mx-auto p-0 ">
      <CardContent>
        <Typography variant="h6" className="font-bold mb-2">
          Projections vs Actuals
        </Typography>
        <div className="relative bg-white rounded-xl overflow-hidden w-full" style={{ height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="#F1F5F9" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#CBD5E1", fontSize: 16 }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 1, right: 1 }}
              />
              <YAxis
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tick={{ fill: "#CBD5E1", fontSize: 15 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}M`}
              />

              <Tooltip
                contentStyle={{ borderRadius: 10, border: 0, boxShadow: "0 2px 12px #0001" }}
                labelStyle={{ marginBottom: 5, color: "#64748b" }}
                formatter={(val, name) => [`${val}M`, name]}
              />
              {/* Actual Bars */}
              <Bar
                dataKey="actual"
                stackId="a"
                fill="#A8C5DA"
                radius={[0, 0, 0, 0]}
                barSize={20}
                opacity={0.85}
              />
              {/* Projection Bars (overlay) */}
              <Bar
                dataKey="projected"
                stackId="a"
                fill="#D0DFEB"
                radius={[6, 6, 0, 0]}
                barSize={20}
                opacity={0.35}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
    </div>

  );
}

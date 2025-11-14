"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Feb", actual: 4000, forecast: 4400 },
  { month: "Mar", actual: null, forecast: 5100 },
  { month: "Apr", actual: null, forecast: 5900 },
  { month: "May", actual: null, forecast: 6300 },
  { month: "Jun", actual: null, forecast: 7000 },
  { month: "Jul", actual: null, forecast: 7800 },
]

export function ForecastChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Area type="monotone" dataKey="actual" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.2} strokeWidth={2} />
        <Area
          type="monotone"
          dataKey="forecast"
          stroke="#94a3b8"
          fill="#94a3b8"
          fillOpacity={0.1}
          strokeWidth={2}
          strokeDasharray="5 5"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}


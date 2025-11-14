"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    "Operating Cash Flow": 4000,
    "Investing Cash Flow": -2400,
    "Financing Cash Flow": -1000,
  },
  {
    name: "Feb",
    "Operating Cash Flow": 4500,
    "Investing Cash Flow": -1800,
    "Financing Cash Flow": -1200,
  },
  {
    name: "Mar",
    "Operating Cash Flow": 5000,
    "Investing Cash Flow": -3000,
    "Financing Cash Flow": -800,
  },
]

export function CashFlow() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Bar dataKey="Operating Cash Flow" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Investing Cash Flow" fill="#f43f5e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Financing Cash Flow" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Q1",
    "2023": 4000,
    "2024": 4400,
  },
  {
    name: "Q2",
    "2023": 5000,
    "2024": 5600,
  },
  {
    name: "Q3",
    "2023": 6000,
    "2024": 6800,
  },
  {
    name: "Q4",
    "2023": 7000,
    "2024": 7600,
  },
]

export function YearlyComparison() {
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
        <Bar dataKey="2023" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="2024" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


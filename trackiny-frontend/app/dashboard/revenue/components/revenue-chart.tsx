"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", income: 2400, expenses: 1398 },
  { month: "Feb", income: 1398, expenses: 2400 },
  { month: "Mar", income: 9800, expenses: 2400 },
  { month: "Apr", income: 3908, expenses: 2000 },
  { month: "May", income: 4800, expenses: 2181 },
  { month: "Jun", income: 3800, expenses: 2500 },
  { month: "Jul", income: 4300, expenses: 2100 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="income" stroke="#4ade80" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}


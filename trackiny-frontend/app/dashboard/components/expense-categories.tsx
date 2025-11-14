"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Marketing", value: 2400, color: "#f43f5e" },
  { name: "Operations", value: 1398, color: "#8b5cf6" },
  { name: "Salaries", value: 9800, color: "#06b6d4" },
  { name: "Software", value: 3908, color: "#10b981" },
  { name: "Office", value: 4800, color: "#f59e0b" },
]

export function ExpenseCategories() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <div className="flex items-center justify-between w-full">
              <span className="text-sm">{item.name}</span>
              <span className="text-sm font-medium">${item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


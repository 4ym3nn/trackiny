"use client"

import { ArrowDown, ArrowUp } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  {
    id: "1",
    date: "2024-02-07",
    description: "Client Payment - Project A",
    amount: 2500,
    type: "income",
  },
  {
    id: "2",
    date: "2024-02-07",
    description: "Office Supplies",
    amount: -150,
    type: "expense",
  },
  {
    id: "3",
    date: "2024-02-06",
    description: "Consulting Services",
    amount: 1800,
    type: "income",
  },
  {
    id: "4",
    date: "2024-02-06",
    description: "Software Subscription",
    amount: -99,
    type: "expense",
  },
  {
    id: "5",
    date: "2024-02-05",
    description: "Client Payment - Project B",
    amount: 3200,
    type: "income",
  },
]

export function TransactionsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>
              {transaction.type === "income" ? (
                <span className="flex items-center gap-1 text-emerald-600">
                  <ArrowUp className="h-4 w-4" />
                  Income
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600">
                  <ArrowDown className="h-4 w-4" />
                  Expense
                </span>
              )}
            </TableCell>
            <TableCell className={`text-right ${transaction.type === "income" ? "text-emerald-600" : "text-red-600"}`}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


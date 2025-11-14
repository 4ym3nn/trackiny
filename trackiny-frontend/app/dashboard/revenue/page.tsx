import { Suspense } from "react"
import { ArrowUp, DollarSign, TrendingDown, TrendingUp, Users, CreditCard, Activity, Target, Ship } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { RevenueChart } from "./components/revenue-chart"
import { TransactionsTable } from "./components/transactions-table"
import { ExpenseCategories } from "./components/expense-categories"
import { YearlyComparison } from "./components/yearly-comparison"
import { ForecastChart } from "./components/forecast-chart"
import { CashFlow } from "./components/cash-flow"
import { ShipmentHeader } from "../shipment-header"

export default function RevenuePage() {
  return (
    <main className="bg-soft-gradient">
        <ShipmentHeader title="Revenues"/>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        
        <div className="flex items-center justify-between space-y-2 ">
          <h2 className="text-3xl font-bold tracking-tight">Revenue Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className=" space-x-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
  
          <TabsContent value="overview" className="space-y-4 ">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180 new customers</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$249.99</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card   className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">+0.3% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-white">
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue breakdown for the current year</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <RevenueChart />
                  </Suspense>
                </CardContent>
              </Card>
              <Card className="col-span-3 bg-white">
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                  <CardDescription>Distribution of expenses by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <ExpenseCategories />
                  </Suspense>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
  
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="bg-white"> 
                <CardHeader>
                  <CardTitle>Year-over-Year Comparison</CardTitle>
                  <CardDescription>Compare revenue performance with previous year</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <YearlyComparison />
                  </Suspense>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Cash Flow Analysis</CardTitle>
                  <CardDescription>Operating, investing, and financing cash flows</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <CashFlow />
                  </Suspense>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
  
          <TabsContent value="forecasting" className="space-y-4 ">
            <div className="grid gap-4">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Revenue Forecast</CardTitle>
                  <CardDescription>6-month revenue projection based on historical data</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<div>Loading chart...</div>}>
                    <ForecastChart />
                  </Suspense>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Projected Revenue</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$67,432.00</div>
                    <p className="text-xs text-muted-foreground">Expected by end of Q2</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">15.2%</div>
                    <p className="text-xs text-muted-foreground">Projected annual growth</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Customer Churn</CardTitle>
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent >
                    <div className="text-2xl font-bold">2.4%</div>
                    <p className="text-xs text-muted-foreground">Expected monthly churn</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">CAC Payback</CardTitle>
                    <ArrowUp className="h-4 w-4 text-emerald-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5.2</div>
                    <p className="text-xs text-muted-foreground">Months to recover CAC</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
  
          <TabsContent value="transactions" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>A list of your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading transactions...</div>}>
                  <TransactionsTable />
                </Suspense>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}


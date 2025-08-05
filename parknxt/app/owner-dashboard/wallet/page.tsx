"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  Check,
  AlertCircle,
  DollarSign,
  CreditCard,
  BanknoteIcon as Bank,
} from "lucide-react"
import { motion } from "framer-motion"

// Dummy data for transactions
const transactions = [
  {
    id: "T001",
    type: "deposit",
    amount: 250.0,
    date: "2025-04-15",
    time: "10:23 AM",
    status: "completed",
    method: "Bank Transfer",
    reference: "REF123456789",
  },
  {
    id: "T002",
    type: "withdrawal",
    amount: 100.0,
    date: "2025-04-12",
    time: "03:45 PM",
    status: "completed",
    method: "Bank Transfer",
    reference: "REF987654321",
  },
  {
    id: "T003",
    type: "deposit",
    amount: 175.5,
    date: "2025-04-10",
    time: "11:30 AM",
    status: "completed",
    method: "Credit Card",
    reference: "REF456789123",
  },
  {
    id: "T004",
    type: "withdrawal",
    amount: 75.0,
    date: "2025-04-05",
    time: "02:15 PM",
    status: "completed",
    method: "Bank Transfer",
    reference: "REF789123456",
  },
  {
    id: "T005",
    type: "deposit",
    amount: 120.0,
    date: "2025-04-01",
    time: "09:50 AM",
    status: "completed",
    method: "Credit Card",
    reference: "REF321654987",
  },
]

export default function WalletPage() {
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawMethod, setWithdrawMethod] = useState("bank")
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const walletBalance = 420.5
  const pendingAmount = 0.0
  const totalEarnings = 745.5

  const handleWithdraw = () => {
    setIsWithdrawing(true)

    // Simulate API call
    setTimeout(() => {
      setIsWithdrawing(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Wallet
        </h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-primary">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-600/10">
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />
                Available Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">${walletBalance.toFixed(2)}</div>
              <p className="text-sm text-muted-foreground mt-1">Available for withdrawal</p>
            </CardContent>
            <CardFooter className="bg-muted/30 px-6 py-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
                    Withdraw Funds
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Withdraw Funds</DialogTitle>
                    <DialogDescription>Enter the amount you want to withdraw from your wallet.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="amount"
                          type="number"
                          min="1"
                          max={walletBalance}
                          placeholder="Enter amount"
                          className="pl-9"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Available balance: ${walletBalance.toFixed(2)}</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="method">Withdrawal Method</Label>
                      <Select value={withdrawMethod} onValueChange={setWithdrawMethod}>
                        <SelectTrigger id="method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="card">Credit Card</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {withdrawMethod === "bank" && (
                      <div className="space-y-2">
                        <Label htmlFor="account">Bank Account</Label>
                        <div className="rounded-md border p-3 bg-muted/30">
                          <div className="flex items-center gap-2">
                            <Bank className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">**** **** **** 1234</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={handleWithdraw}
                      disabled={!withdrawAmount || isWithdrawing || Number(withdrawAmount) > walletBalance}
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
                    >
                      {isWithdrawing ? (
                        <span className="flex items-center gap-1">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Processing...
                        </span>
                      ) : isSuccess ? (
                        <span className="flex items-center gap-1">
                          <Check className="h-4 w-4" />
                          Success!
                        </span>
                      ) : (
                        "Withdraw"
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-amber-500">
            <CardHeader className="bg-amber-50">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-500" />
                Pending Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">${pendingAmount.toFixed(2)}</div>
              <p className="text-sm text-muted-foreground mt-1">Will be available in 1-3 business days</p>
            </CardContent>
            <CardFooter className="bg-muted/30 px-6 py-3">
              <Button variant="outline" className="w-full">
                View Pending Transactions
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-green-500">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-green-500" />
                Total Earnings
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-3xl font-bold">${totalEarnings.toFixed(2)}</div>
              <p className="text-sm text-muted-foreground mt-1">Lifetime earnings from parking spaces</p>
            </CardContent>
            <CardFooter className="bg-muted/30 px-6 py-3">
              <Button variant="outline" className="w-full">
                View Earnings Report
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="overflow-hidden border-t-4 border-t-primary">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-600/10">
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>View all your wallet transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="bg-muted/50 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
                >
                  All Transactions
                </TabsTrigger>
                <TabsTrigger
                  value="deposits"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
                >
                  Deposits
                </TabsTrigger>
                <TabsTrigger
                  value="withdrawals"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
                >
                  Withdrawals
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${
                            transaction.type === "deposit"
                              ? "bg-green-100 text-green-600"
                              : "bg-amber-100 text-amber-600"
                          }`}
                        >
                          {transaction.type === "deposit" ? (
                            <ArrowDownLeft className="h-5 w-5" />
                          ) : (
                            <ArrowUpRight className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{transaction.type === "deposit" ? "Deposit" : "Withdrawal"}</div>
                          <div className="text-sm text-muted-foreground">
                            {transaction.date} • {transaction.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-medium ${
                            transaction.type === "deposit" ? "text-green-600" : "text-amber-600"
                          }`}
                        >
                          {transaction.type === "deposit" ? "+" : "-"}${transaction.amount.toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">{transaction.method}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="deposits">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "deposit")
                    .map((transaction) => (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between rounded-lg border p-4 hover:bg-green-50/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <ArrowDownLeft className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Deposit</div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.date} • {transaction.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">+${transaction.amount.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">{transaction.method}</div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="withdrawals">
                <div className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "withdrawal")
                    .map((transaction) => (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between rounded-lg border p-4 hover:bg-amber-50/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                            <ArrowUpRight className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium">Withdrawal</div>
                            <div className="text-sm text-muted-foreground">
                              {transaction.date} • {transaction.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-amber-600">-${transaction.amount.toFixed(2)}</div>
                          <div className="text-sm text-muted-foreground">{transaction.method}</div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="grid gap-4 md:grid-cols-2"
      >
        <Card className="overflow-hidden border-t-4 border-t-blue-500">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-blue-500" />
              Payment Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Bank className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Bank Account</div>
                    <div className="text-sm text-muted-foreground">**** **** **** 1234</div>
                  </div>
                </div>
                <Badge>Default</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  <div>
                    <div className="font-medium">Credit Card</div>
                    <div className="text-sm text-muted-foreground">**** **** **** 5678</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Set Default
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 px-6 py-3">
            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-t-4 border-t-purple-500">
          <CardHeader className="bg-purple-50">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-purple-500" />
              Quick Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <h3 className="font-medium">Faster Withdrawals</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Bank transfers typically process within 1-3 business days. For faster withdrawals, consider using
                  PayPal.
                </p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <h3 className="font-medium">Automatic Deposits</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  All earnings from your parking spaces are automatically deposited into your wallet.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 px-6 py-3">
            <Button variant="outline" className="w-full">
              View Help Center
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}


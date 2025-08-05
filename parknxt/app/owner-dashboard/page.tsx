"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Car, DollarSign, Users, Clock, TrendingUp, ArrowUpRight, MapPin } from "lucide-react"
import { AreaChart, BarChart } from "@/components/ui/chart"
import { motion } from "framer-motion"

// Dummy data for charts
const areaChartData = [
  { name: "Jan", total: 580 },
  { name: "Feb", total: 690 },
  { name: "Mar", total: 1100 },
  { name: "Apr", total: 1200 },
  { name: "May", total: 1380 },
  { name: "Jun", total: 1500 },
]

const barChartData = [
  { name: "Mon", total: 120 },
  { name: "Tue", total: 220 },
  { name: "Wed", total: 190 },
  { name: "Thu", total: 270 },
  { name: "Fri", total: 320 },
  { name: "Sat", total: 430 },
  { name: "Sun", total: 380 },
]

// Dummy data for parking spaces
const parkingSpaces = [
  {
    id: 1,
    name: "Downtown Parking Lot",
    address: "123 Main St, Downtown",
    price: 5.5,
    bookings: 42,
    revenue: 231,
    location: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  {
    id: 2,
    name: "Shopping Mall Garage",
    address: "456 Market Ave, Westside",
    price: 4.75,
    bookings: 67,
    revenue: 318.25,
    location: {
      lat: 40.758,
      lng: -73.9855,
    },
  },
  {
    id: 3,
    name: "Office Building Parking",
    address: "789 Business Blvd, Financial District",
    price: 6.25,
    bookings: 31,
    revenue: 193.75,
    location: {
      lat: 40.7112,
      lng: -74.014,
    },
  },
]

export default function OwnerDashboardPage() {
  const [selectedSpace, setSelectedSpace] = useState<(typeof parkingSpaces)[0] | null>(null)

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
          <TrendingUp className="mr-2 h-4 w-4" />
          View Reports
        </Button>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-primary">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$743.00</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +20.1% from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <Clock className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">140</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-amber-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +7.2% from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="overflow-hidden border-t-4 border-t-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Parking Spaces</CardTitle>
              <Car className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex items-center text-xs text-green-500">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +1 from last month
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="spaces"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            Parking Spaces
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card className="overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-600/10">
                  <CardTitle>Revenue</CardTitle>
                  <CardDescription>Your revenue over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] pt-4">
                  <AreaChart
                    data={areaChartData}
                    index="name"
                    categories={["total"]}
                    colors={["primary"]}
                    valueFormatter={(value: number) => `$${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Card className="overflow-hidden border-t-4 border-t-blue-500">
                <CardHeader className="bg-blue-50">
                  <CardTitle>Weekly Bookings</CardTitle>
                  <CardDescription>Bookings by day of week</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] pt-4">
                  <BarChart
                    data={barChartData}
                    index="name"
                    categories={["total"]}
                    colors={["blue"]}
                    valueFormatter={(value: number) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-t-4 border-t-amber-500">
              <CardHeader className="bg-amber-50">
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>In-depth analysis of your parking spaces</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p>Detailed analytics content will appear here.</p>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="spaces" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {parkingSpaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden border-t-4 border-t-primary cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedSpace(space)}
                >
                  <div className="aspect-video w-full bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Car className="h-12 w-12 text-muted-foreground/50" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="font-medium text-white">{space.name}</h3>
                      <p className="text-xs text-white/80 flex items-center">
                        <MapPin className="mr-1 h-3 w-3" />
                        {space.address}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Price per hour:</span>
                        <span className="font-medium">${space.price.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Total bookings:</span>
                        <span className="font-medium">{space.bookings}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Total revenue:</span>
                        <span className="font-medium text-green-600">${space.revenue.toFixed(2)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {selectedSpace && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden border-t-4 border-t-primary">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-600/10">
                  <CardTitle>Space Location</CardTitle>
                  <CardDescription>
                    {selectedSpace.name} - {selectedSpace.address}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedSpace.location.lat},${selectedSpace.location.lng}`}
                      allowFullScreen
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div className="bg-white p-2 rounded-full shadow-lg">
                        <MapPin className="h-6 w-6 text-red-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}


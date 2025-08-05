"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MapPin, Calendar, User, DollarSign, Eye } from "lucide-react"
import { motion } from "framer-motion"

// Dummy data for bookings
const bookings = [
  {
    id: "B001",
    user: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
    },
    space: "Downtown Parking Lot",
    location: {
      address: "123 Main St, Downtown",
      lat: 40.7128,
      lng: -74.006,
    },
    date: "2025-04-15",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    duration: 2,
    amount: 11.0,
    status: "completed",
  },
  {
    id: "B002",
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
    },
    space: "Shopping Mall Garage",
    location: {
      address: "456 Market Ave, Westside",
      lat: 40.758,
      lng: -73.9855,
    },
    date: "2025-04-16",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    duration: 2,
    amount: 9.5,
    status: "upcoming",
  },
  {
    id: "B003",
    user: {
      name: "Robert Johnson",
      email: "robert@example.com",
      phone: "+1 (555) 456-7890",
    },
    space: "Downtown Parking Lot",
    location: {
      address: "123 Main St, Downtown",
      lat: 40.7128,
      lng: -74.006,
    },
    date: "2025-04-14",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    duration: 2,
    amount: 11.0,
    status: "completed",
  },
  {
    id: "B004",
    user: {
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1 (555) 234-5678",
    },
    space: "Office Building Parking",
    location: {
      address: "789 Business Blvd, Financial District",
      lat: 40.7112,
      lng: -74.014,
    },
    date: "2025-04-17",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
    duration: 9,
    amount: 56.25,
    status: "upcoming",
  },
  {
    id: "B005",
    user: {
      name: "Michael Wilson",
      email: "michael@example.com",
      phone: "+1 (555) 876-5432",
    },
    space: "Shopping Mall Garage",
    location: {
      address: "456 Market Ave, Westside",
      lat: 40.758,
      lng: -73.9855,
    },
    date: "2025-04-13",
    startTime: "03:00 PM",
    endTime: "06:00 PM",
    duration: 3,
    amount: 14.25,
    status: "completed",
  },
]

export default function BookingsPage() {
  const completedBookings = bookings.filter((booking) => booking.status === "completed")
  const upcomingBookings = bookings.filter((booking) => booking.status === "upcoming")
  const [selectedBooking, setSelectedBooking] = useState<(typeof bookings)[0] | null>(null)

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Booking Logs
        </h2>
        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
          Export Data
        </Button>
      </motion.div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            All Bookings
          </TabsTrigger>
          <TabsTrigger
            value="upcoming"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/80 data-[state=active]:to-purple-600/80 data-[state=active]:text-white transition-all duration-300"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-t-4 border-t-primary">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-600/10">
                <CardTitle>All Bookings</CardTitle>
                <CardDescription>View all bookings for your parking spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Space</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{booking.user.name}</div>
                          <div className="text-sm text-muted-foreground">{booking.user.email}</div>
                        </TableCell>
                        <TableCell>{booking.space}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{`${booking.startTime} - ${booking.endTime}`}</TableCell>
                        <TableCell>{`${booking.duration} hr${booking.duration > 1 ? "s" : ""}`}</TableCell>
                        <TableCell className="font-medium text-green-600">${booking.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`
                              ${
                                booking.status === "completed"
                                  ? "bg-green-100 text-green-700 hover:bg-green-100"
                                  : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                              }
                            `}
                          >
                            {booking.status === "completed" ? "Completed" : "Upcoming"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-primary/10 transition-colors"
                                onClick={() => setSelectedBooking(booking)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Booking Details</DialogTitle>
                                <DialogDescription>Complete information about this booking</DialogDescription>
                              </DialogHeader>
                              {selectedBooking && (
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <Card className="p-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
                                      <div className="flex items-center gap-2">
                                        <User className="h-5 w-5 text-primary" />
                                        <h3 className="font-medium">User Information</h3>
                                      </div>
                                      <div className="mt-2 space-y-1 text-sm">
                                        <p>
                                          <span className="font-medium">Name:</span> {selectedBooking.user.name}
                                        </p>
                                        <p>
                                          <span className="font-medium">Email:</span> {selectedBooking.user.email}
                                        </p>
                                        <p>
                                          <span className="font-medium">Phone:</span> {selectedBooking.user.phone}
                                        </p>
                                      </div>
                                    </Card>
                                    <Card className="p-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
                                      <div className="flex items-center gap-2">
                                        <DollarSign className="h-5 w-5 text-green-600" />
                                        <h3 className="font-medium">Payment Information</h3>
                                      </div>
                                      <div className="mt-2 space-y-1 text-sm">
                                        <p>
                                          <span className="font-medium">Amount:</span> $
                                          {selectedBooking.amount.toFixed(2)}
                                        </p>
                                        <p>
                                          <span className="font-medium">Status:</span> Paid
                                        </p>
                                        <p>
                                          <span className="font-medium">Method:</span> Credit Card
                                        </p>
                                      </div>
                                    </Card>
                                  </div>

                                  <Card className="p-4 bg-gradient-to-r from-primary/10 to-purple-600/10">
                                    <div className="flex items-center gap-2">
                                      <Calendar className="h-5 w-5 text-purple-600" />
                                      <h3 className="font-medium">Booking Information</h3>
                                    </div>
                                    <div className="mt-2 space-y-1 text-sm">
                                      <p>
                                        <span className="font-medium">Space:</span> {selectedBooking.space}
                                      </p>
                                      <p>
                                        <span className="font-medium">Date:</span> {selectedBooking.date}
                                      </p>
                                      <p>
                                        <span className="font-medium">Time:</span> {selectedBooking.startTime} -{" "}
                                        {selectedBooking.endTime}
                                      </p>
                                      <p>
                                        <span className="font-medium">Duration:</span> {selectedBooking.duration}{" "}
                                        hour(s)
                                      </p>
                                    </div>
                                  </Card>

                                  <Card className="p-4">
                                    <div className="flex items-center gap-2">
                                      <MapPin className="h-5 w-5 text-red-500" />
                                      <h3 className="font-medium">Location</h3>
                                    </div>
                                    <div className="mt-2">
                                      <p className="text-sm mb-2">{selectedBooking.location.address}</p>
                                      <div className="aspect-video w-full overflow-hidden rounded-md bg-muted relative">
                                        <iframe
                                          width="100%"
                                          height="100%"
                                          frameBorder="0"
                                          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedBooking.location.lat},${selectedBooking.location.lng}`}
                                          allowFullScreen
                                          className="absolute inset-0"
                                        ></iframe>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                          <div className="bg-white p-2 rounded-md shadow-md">
                                            <MapPin className="h-6 w-6 text-red-500" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-t-4 border-t-blue-500">
              <CardHeader className="bg-blue-50">
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>View all upcoming bookings for your parking spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Space</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingBookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-blue-50/50 transition-colors">
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{booking.user.name}</div>
                          <div className="text-sm text-muted-foreground">{booking.user.email}</div>
                        </TableCell>
                        <TableCell>{booking.space}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{`${booking.startTime} - ${booking.endTime}`}</TableCell>
                        <TableCell>{`${booking.duration} hr${booking.duration > 1 ? "s" : ""}`}</TableCell>
                        <TableCell className="font-medium text-green-600">${booking.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-blue-100 transition-colors"
                                onClick={() => setSelectedBooking(booking)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Booking Details</DialogTitle>
                                <DialogDescription>Complete information about this booking</DialogDescription>
                              </DialogHeader>
                              {selectedBooking && <div className="grid gap-4 py-4">{/* Same content as above */}</div>}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden border-t-4 border-t-green-500">
              <CardHeader className="bg-green-50">
                <CardTitle>Completed Bookings</CardTitle>
                <CardDescription>View all completed bookings for your parking spaces</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Space</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedBookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-green-50/50 transition-colors">
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="font-medium">{booking.user.name}</div>
                          <div className="text-sm text-muted-foreground">{booking.user.email}</div>
                        </TableCell>
                        <TableCell>{booking.space}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{`${booking.startTime} - ${booking.endTime}`}</TableCell>
                        <TableCell>{`${booking.duration} hr${booking.duration > 1 ? "s" : ""}`}</TableCell>
                        <TableCell className="font-medium text-green-600">${booking.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-green-100 transition-colors"
                                onClick={() => setSelectedBooking(booking)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[600px]">
                              <DialogHeader>
                                <DialogTitle>Booking Details</DialogTitle>
                                <DialogDescription>Complete information about this booking</DialogDescription>
                              </DialogHeader>
                              {selectedBooking && <div className="grid gap-4 py-4">{/* Same content as above */}</div>}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


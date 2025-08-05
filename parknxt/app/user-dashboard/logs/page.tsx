import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, MapPin, Clock, Receipt } from "lucide-react"

// Dummy data for bookings
const bookings = [
  {
    id: "B001",
    space: {
      name: "Downtown Parking Lot",
      address: "123 Main St, Downtown",
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
    space: {
      name: "Shopping Mall Garage",
      address: "456 Market Ave, Westside",
    },
    date: "2025-04-25",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    duration: 2,
    amount: 9.5,
    status: "upcoming",
  },
  {
    id: "B003",
    space: {
      name: "Office Building Parking",
      address: "789 Business Blvd, Financial District",
    },
    date: "2025-04-28",
    startTime: "08:00 AM",
    endTime: "05:00 PM",
    duration: 9,
    amount: 56.25,
    status: "upcoming",
  },
  {
    id: "B004",
    space: {
      name: "Downtown Parking Lot",
      address: "123 Main St, Downtown",
    },
    date: "2025-04-10",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    duration: 2,
    amount: 11.0,
    status: "completed",
  },
  {
    id: "B005",
    space: {
      name: "Shopping Mall Garage",
      address: "456 Market Ave, Westside",
    },
    date: "2025-04-05",
    startTime: "03:00 PM",
    endTime: "06:00 PM",
    duration: 3,
    amount: 14.25,
    status: "completed",
  },
]

export default function LogsPage() {
  const upcomingBookings = bookings.filter((booking) => booking.status === "upcoming")
  const completedBookings = bookings.filter((booking) => booking.status === "completed")

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Booking History</h2>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingBookings.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <Car className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium">No upcoming bookings</h3>
                <p className="text-sm text-muted-foreground mt-1">You don't have any upcoming parking reservations.</p>
                <Button className="mt-4">Book Parking</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {upcomingBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{booking.space.name}</CardTitle>
                      <Badge>Upcoming</Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      {booking.space.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Date</div>
                        <div className="font-medium">{booking.date}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Time</div>
                        <div className="font-medium">{`${booking.startTime} - ${booking.endTime}`}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">{`${booking.duration} hr${booking.duration > 1 ? "s" : ""}`}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Amount</div>
                        <div className="font-medium">${booking.amount.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Clock className="mr-2 h-4 w-4" />
                        Extend
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedBookings.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <Car className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium">No completed bookings</h3>
                <p className="text-sm text-muted-foreground mt-1">You don't have any completed parking reservations.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {completedBookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{booking.space.name}</CardTitle>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                    <CardDescription className="flex items-center">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      {booking.space.address}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Date</div>
                        <div className="font-medium">{booking.date}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Time</div>
                        <div className="font-medium">{`${booking.startTime} - ${booking.endTime}`}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Duration</div>
                        <div className="font-medium">{`${booking.duration} hr${booking.duration > 1 ? "s" : ""}`}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-muted-foreground">Amount</div>
                        <div className="font-medium">${booking.amount.toFixed(2)}</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Receipt className="mr-2 h-4 w-4" />
                        Receipt
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Book Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}


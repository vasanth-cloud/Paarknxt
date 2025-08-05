import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Clock, Car, Zap, Wifi } from "lucide-react"

// Dummy data for parking spaces
const parkingSpaces = [
  {
    id: 1,
    name: "Downtown Parking Lot",
    address: "123 Main St, Downtown",
    price: 5.5,
    distance: 0.5,
    features: ["EV Charging", "Security Camera"],
    availability: "High",
  },
  {
    id: 2,
    name: "Shopping Mall Garage",
    address: "456 Market Ave, Westside",
    price: 4.75,
    distance: 1.2,
    features: ["Covered", "24/7 Access"],
    availability: "Medium",
  },
  {
    id: 3,
    name: "Office Building Parking",
    address: "789 Business Blvd, Financial District",
    price: 6.25,
    distance: 0.8,
    features: ["Security Guard", "EV Charging", "WiFi"],
    availability: "Low",
  },
  {
    id: 4,
    name: "Central Park Garage",
    address: "321 Park Ave, Midtown",
    price: 7.0,
    distance: 1.5,
    features: ["Covered", "Security Camera", "Car Wash"],
    availability: "High",
  },
]

export default function UserDashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Find Parking</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Parking Spaces</CardTitle>
          <CardDescription>Find available parking spaces near your destination</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1 space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Enter location or address" className="pl-8" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button>Search</Button>
              <Button variant="outline">
                <MapPin className="mr-2 h-4 w-4" />
                Near Me
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {parkingSpaces.map((space) => (
          <Card key={space.id} className="overflow-hidden">
            <div className="aspect-video w-full bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <Badge
                className="absolute right-2 top-2"
                variant={
                  space.availability === "High"
                    ? "default"
                    : space.availability === "Medium"
                      ? "secondary"
                      : "destructive"
                }
              >
                {space.availability} Availability
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>{space.name}</CardTitle>
              <CardDescription className="flex items-center">
                <MapPin className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                {space.address}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <Clock className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                    Price per hour:
                  </span>
                  <span className="font-medium">${space.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <MapPin className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
                    Distance:
                  </span>
                  <span className="font-medium">{space.distance} miles</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {space.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="flex items-center gap-1">
                      {feature === "EV Charging" && <Zap className="h-3 w-3" />}
                      {feature === "WiFi" && <Wifi className="h-3 w-3" />}
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


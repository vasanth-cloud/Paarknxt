import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Wifi, Droplet, Shield, Gift } from "lucide-react"

// Dummy data for offers
const offers = [
  {
    id: 1,
    title: "First Hour Free",
    description: "Get your first hour of parking free when you book for 3+ hours",
    code: "FIRSTFREE",
    expiryDate: "2025-05-31",
    icon: Clock,
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Free EV Charging",
    description: "Book a premium spot and get free EV charging during your stay",
    code: "FREECHARGE",
    expiryDate: "2025-05-15",
    icon: Zap,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Weekend Special",
    description: "50% off on all weekend bookings between 6 PM Friday and 6 AM Monday",
    code: "WEEKEND50",
    expiryDate: "2025-06-30",
    icon: Gift,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Free Car Wash",
    description: "Get a free basic car wash with any booking of 4+ hours",
    code: "WASHFREE",
    expiryDate: "2025-05-20",
    icon: Droplet,
    color: "bg-cyan-500",
  },
  {
    id: 5,
    title: "Premium Security",
    description: "Book a premium spot with 24/7 security monitoring at regular rates",
    code: "SAFEPARKING",
    expiryDate: "2025-07-15",
    icon: Shield,
    color: "bg-red-500",
  },
  {
    id: 6,
    title: "Free WiFi Access",
    description: "Stay connected with free WiFi access during your parking duration",
    code: "FREEWIFI",
    expiryDate: "2025-06-15",
    icon: Wifi,
    color: "bg-amber-500",
  },
]

export default function OffersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Special Offers</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <Card key={offer.id} className="overflow-hidden">
            <div className={`h-2 w-full ${offer.color}`} />
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-1.5 ${offer.color} text-white`}>
                  <offer.icon className="h-4 w-4" />
                </div>
                <CardTitle className="text-lg">{offer.title}</CardTitle>
              </div>
              <CardDescription>{offer.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  {offer.code}
                </Badge>
                <span className="text-xs text-muted-foreground">Expires: {offer.expiryDate}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Apply Offer</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


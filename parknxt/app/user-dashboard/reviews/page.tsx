"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, ThumbsUp, MessageSquare, Flag } from "lucide-react"

// Dummy data for parking spaces
const parkingSpaces = [
  {
    id: 1,
    name: "Downtown Parking Lot",
    address: "123 Main St, Downtown",
    lastUsed: "2025-04-15",
  },
  {
    id: 2,
    name: "Shopping Mall Garage",
    address: "456 Market Ave, Westside",
    lastUsed: "2025-04-05",
  },
  {
    id: 3,
    name: "Office Building Parking",
    address: "789 Business Blvd, Financial District",
    lastUsed: "2025-03-28",
  },
]

// Dummy data for reviews
const reviews = [
  {
    id: 1,
    spaceId: 1,
    spaceName: "Downtown Parking Lot",
    user: {
      name: "John D.",
      avatar: null,
    },
    rating: 4,
    comment: "Great location, easy to find. The entrance is a bit narrow though.",
    date: "2025-04-16",
    likes: 3,
    replies: 1,
  },
  {
    id: 2,
    spaceId: 1,
    spaceName: "Downtown Parking Lot",
    user: {
      name: "Sarah M.",
      avatar: null,
    },
    rating: 5,
    comment: "Perfect spot! Close to all the shops and restaurants. Will definitely use again.",
    date: "2025-04-10",
    likes: 7,
    replies: 2,
  },
  {
    id: 3,
    spaceId: 2,
    spaceName: "Shopping Mall Garage",
    user: {
      name: "Robert J.",
      avatar: null,
    },
    rating: 3,
    comment: "Decent parking but a bit expensive for what you get. Security is good though.",
    date: "2025-04-08",
    likes: 2,
    replies: 0,
  },
  {
    id: 4,
    spaceId: 3,
    spaceName: "Office Building Parking",
    user: {
      name: "Emily D.",
      avatar: null,
    },
    rating: 5,
    comment: "Very secure and clean. The staff was helpful when I had trouble finding my spot.",
    date: "2025-03-30",
    likes: 5,
    replies: 1,
  },
]

export default function ReviewsPage() {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSpace) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Review submitted:", {
        spaceId: selectedSpace,
        rating,
        comment,
      })
      setIsSubmitting(false)
      setSelectedSpace(null)
      setRating(0)
      setComment("")
    }, 1500)
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
      </div>

      <Tabs defaultValue="write" className="space-y-4">
        <TabsList>
          <TabsTrigger value="write">Write a Review</TabsTrigger>
          <TabsTrigger value="read">Read Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="space-y-4">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
                <CardDescription>Share your experience with a parking space you've used</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Parking Space</label>
                  <div className="grid gap-2">
                    {parkingSpaces.map((space) => (
                      <div
                        key={space.id}
                        className={`flex items-center justify-between rounded-md border p-3 cursor-pointer transition-colors ${
                          selectedSpace === space.id ? "border-primary bg-primary/5" : "hover:bg-muted"
                        }`}
                        onClick={() => setSelectedSpace(space.id)}
                      >
                        <div className="space-y-0.5">
                          <div className="font-medium">{space.name}</div>
                          <div className="text-xs text-muted-foreground">Last used: {space.lastUsed}</div>
                        </div>
                        <div className="h-5 w-5 rounded-full border flex items-center justify-center">
                          {selectedSpace === space.id && <div className="h-3 w-3 rounded-full bg-primary" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        className="rounded-md p-1 hover:bg-muted"
                        onClick={() => handleRatingClick(value)}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            value <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="comment">
                    Your Review
                  </label>
                  <Textarea
                    id="comment"
                    placeholder="Share your experience with this parking space..."
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  disabled={!selectedSpace || rating === 0 || comment.trim() === "" || isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-1">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit Review"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="read" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.spaceName}</CardTitle>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{review.user.name}</span>
                    </div>
                    <span className="text-xs">{review.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.comment}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-xs">{review.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 gap-1 px-2">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-xs">{review.replies}</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Flag className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}


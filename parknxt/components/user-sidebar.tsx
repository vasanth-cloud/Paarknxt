"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Car, Tag, ClipboardList, Star, Settings, LogOut, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const sidebarLinks = [
  { name: "Home", href: "/user-dashboard", icon: Home },
  { name: "Book Parking", href: "/user-dashboard/book", icon: Car },
  { name: "Offers", href: "/user-dashboard/offers", icon: Tag },
  { name: "Logs", href: "/user-dashboard/logs", icon: ClipboardList },
  { name: "Reviews", href: "/user-dashboard/reviews", icon: Star },
  { name: "Settings", href: "/user-dashboard/settings", icon: Settings },
]

export function UserSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 top-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <div
        className={cn("fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-64 border-r bg-background transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/user-dashboard" className="flex items-center gap-2 font-bold text-xl">
            <span>PARKNXT</span>
            <span className="text-xs font-normal text-muted-foreground">User</span>
          </Link>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <Link href="/login">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}


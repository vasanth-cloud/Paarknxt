import type React from "react"
import { UserSidebar } from "@/components/user-sidebar"

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex-1 md:ml-64">{children}</div>
    </div>
  )
}


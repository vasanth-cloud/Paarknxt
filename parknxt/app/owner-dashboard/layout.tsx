import type React from "react"
import { OwnerSidebar } from "@/components/owner-sidebar"

export default function OwnerDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <OwnerSidebar />
      <div className="flex-1 md:ml-64">{children}</div>
    </div>
  )
}


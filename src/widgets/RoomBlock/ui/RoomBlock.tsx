'use client'

import { useSearchParams } from "next/navigation"

export function RoomBlock() {
  const searchParams = useSearchParams()
  const id = searchParams.get("roomId") || ""

  return (
    <div className="h-screen w-full bg-gray-500 p-4">
      <p className="text-2xl">Room # {id}</p>
    </div>
  )
}

'use client'

import { useSearchParams } from "next/navigation";
import { Room } from "../lib/types";
import { RoomSidebarCard } from "./RoomSidebarCard";



export function RoomSidebarCardList({ rooms }: {
  rooms: Room[]
}) {
  const searchParams = useSearchParams()
  const id = searchParams.get("roomId") || ""


  return (
    <div className="w-full flex flex-col gap-2">
      {rooms.map((room) => <RoomSidebarCard key={room.id} room={room} selected={String(room.id) === id} />)}
    </div>
  );
}

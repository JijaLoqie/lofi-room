'use client'
import type { Room } from "../lib/types";
import { useRouter } from "next/navigation";

export function RoomSidebarCard({ room, selected = false }: { room: Room, selected?: boolean }) {
  const router = useRouter()

  return (
    <div className={`p-6 mb-0 m-2
    bg-gray-${selected ? 700 : 600}
    rounded hover:bg-gray-600 transition cursor-pointer`}
      onClick={() => router.push(`?roomId=${room.id}`)}
    >
      <p className="text-3xl">{room.name}</p>
    </div>
  );
}

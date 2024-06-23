import { RoomSidebarCardList } from "@/src/entities/room";
import type { Room } from "@/src/entities/room";

const rooms: Room[] = [
  { id: 1, name: "room1" },
  { id: 2, name: "room2" },
  { id: 3, name: "room3" },
  { id: 4, name: "room4" },
]



export function SidebarRoomsBlock() {
  return (
    <RoomSidebarCardList rooms={rooms} />
  );
}

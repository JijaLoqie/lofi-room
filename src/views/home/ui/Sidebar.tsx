import { ProfileBlock } from "@/src/widgets/Profile"
import { SidebarRoomsBlock } from "@/src/widgets/SidebarRoomsBlock"

export function Sidebar() {
  return (
    <aside className="bg-slate-800 h-screen w-1/6">
      <ProfileBlock />
      <SidebarRoomsBlock />
    </aside>
  )
}

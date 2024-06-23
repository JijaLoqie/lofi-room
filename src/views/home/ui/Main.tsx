import { RoomBlock } from "@/src/widgets/RoomBlock";
import { SettingsBlock } from "@/src/widgets/SettingsBlock";

export function Main() {
  return (
    <main className="bg-slate-900 h-full w-5/6 flex flex-col">
      <RoomBlock />
      <SettingsBlock />
    </main>
  )
}

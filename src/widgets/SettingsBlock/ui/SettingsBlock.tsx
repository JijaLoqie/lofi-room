import { ButtonTab } from "@/src/shared/ui";

export function SettingsBlock() {
  return (
    <div className="h-screen w-full bg-red-900 border-b p-4">
      <div className="flex justify-between">
        <p className="text-2xl">Settings</p>
        <div className="flex gap-4">

          <ButtonTab> Background </ButtonTab>
          <ButtonTab> Music </ButtonTab>
          <ButtonTab> Timer </ButtonTab>
          <ButtonTab> Colors </ButtonTab>
        </div>
      </div>
    </div>
  );
}

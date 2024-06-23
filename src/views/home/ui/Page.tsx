import { Main } from "./Main"
import { Sidebar } from "./Sidebar"

export function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}


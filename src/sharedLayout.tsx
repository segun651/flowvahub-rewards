import { Outlet } from "react-router-dom"
import { Sidebar } from "./components/sidebar"
export default function SharedLayout() {
    return (
  <div className="flex flex-col md:flex-row min-h-dvh lg:h-screen  lg:md:overflow-hidden w-full">

<Sidebar />
<Outlet />
  </div>
    )

}
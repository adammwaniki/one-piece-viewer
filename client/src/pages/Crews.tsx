import { Outlet } from "react-router";
import CrewImageCard from "../cards/CrewImageCard";

export default function Crews() {
  return (
    <div>
        Crews
        <CrewImageCard />
        <Outlet />
    </div>
  )
}

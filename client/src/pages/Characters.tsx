import { Outlet } from "react-router";
import CharacterImageCard from "../cards/CharacterImageCard";


export default function Characters() {
  return (
    <div>
        Characters
        <CharacterImageCard />
        <Outlet />
    </div>
  )
}

import { Outlet } from "react-router";
import FruitImageCard from "../cards/FruitImageCard";

export default function Devilfruits() {
  return (
    <div>
        Devilfruits
        <FruitImageCard />
        <Outlet />
    </div>
  )
}

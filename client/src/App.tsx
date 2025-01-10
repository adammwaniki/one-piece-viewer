import Characters from "./pages/Characters"
import Crews from "./pages/Crews"
import Homepage from "./pages/Homepage";
import CharacterDetailsCard from "./cards/CharacterDetailsCard";
import CrewDetailsCard from "./cards/CrewDetailsCard";
import Navbar from "./navigation/Navbar";
import FruitDetailsCard from "./cards/FruitDetailsCard";  
import FruitImageCard from "./cards/FruitImageCard";

import { BrowserRouter, Routes, Route } from "react-router";
import Devilfruits from "./pages/Devilfruits";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/character" element={<Characters />}>
            <Route path=":id" element={<CharacterDetailsCard />} />
          </Route>
          <Route path="/crew" element={<Crews />}>
            <Route path=":id" element={<CrewDetailsCard />} />
          </Route>
          <Route path="/devilfruit" element={<Devilfruits />}>
            <Route path=":id" element={<FruitDetailsCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


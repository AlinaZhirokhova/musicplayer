import { Routes, Route } from "react-router-dom"
import { Main } from "./pages/main/main.jsx"
import { MyTracks } from "./pages/mytracks/mytracks.jsx"
import { Indi } from "./pages/indi/indi.jsx"
import { DayPlaylist } from "./pages/dayplaylist/dayplaylist.jsx"
import { DanceTracks } from "./pages/100danceTracks/100danceTracks.jsx"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mytracks" element={<MyTracks />} />
      <Route path="/indi" element={<Indi />} />
      <Route path="/dayplaylist" element={<DayPlaylist />} />
      <Route path="/dancetracks" element={<DanceTracks />} />
    </Routes>
  );
};
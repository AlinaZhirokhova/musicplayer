import { Routes, Route } from "react-router-dom"
// import { Main } from "./pages/main/main.jsx";
import { MyTracks } from "./pages/mytracks/mytracks.jsx"

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Main />} /> */}
      <Route path="/mytracks" element={<MyTracks />} />
    </Routes>
  );
};
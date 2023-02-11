import { Routes, Route, Navigate } from "react-router-dom"
import { Main } from "./pages/main/main.jsx"
import { MyTracks } from "./pages/mytracks/mytracks.jsx"
import { Indi } from "./pages/indi/indi.jsx"
import { DayPlaylist } from "./pages/dayplaylist/dayplaylist.jsx"
import { DanceTracks } from "./pages/100danceTracks/100danceTracks.jsx"
import { NotFound } from "./pages/notFound/notFound.jsx"
import { Login } from "./pages/login/login.jsx"
import { Register } from "./pages/register/register.jsx"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext.js"

export const AppRoutes = () => {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
    if(currentUser) {
      return children
    } else {
      return <Navigate to={"/register"}/>
    }
  }
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>} />
      <Route path="/mytracks" element={<MyTracks />} />
      <Route path="/indi" element={<Indi />} />
      <Route path="/dayplaylist" element={<DayPlaylist />} />
      <Route path="/dancetracks" element={<DanceTracks />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
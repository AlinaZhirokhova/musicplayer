import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/main/main.jsx'
import { MyTracks } from './pages/mytracks/mytracks.jsx'
import { Indi } from './pages/indi/indi.jsx'
import { DayPlaylist } from './pages/dayplaylist/dayplaylist.jsx'
import { DanceTracks } from './pages/100danceTracks/100danceTracks.jsx'
import { NotFound } from './pages/notFound/notFound.jsx'
import { Login } from './pages/login/login.jsx'
import { Register } from './pages/register/register.jsx'
// import { useContext } from 'react'
// import { AuthContext } from './context/AuthContext.js'
import { Bar } from './components/bar/bar.jsx'
import { useSelector } from 'react-redux'

export const AppRoutes = () => {
  const { trackId } = useSelector((state) => state.id)

  // const { currentUser } = useContext(AuthContext)
  // const ProtectedRoute = ({ children }) => {
  //   if (currentUser) {
  //     return children
  //   } else {
  //     return <Navigate to={'/login'} />
  //   }
  // }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main />
            {Object.keys(trackId).length ? <Bar /> : ''}
          </> 
          // <ProtectedRoute>
            
          // </ProtectedRoute>
        }
      />
      <Route path="/mytracks" element={
        <>
          <MyTracks />
          {Object.keys(trackId).length ? <Bar /> : ''}
        </>
      } />
      <Route path="/indi" element={
        <>
          <Indi />
          {Object.keys(trackId).length ? <Bar /> : ''}
        </>
      } />
      <Route path="/dayplaylist" element={
        <> 
          <DayPlaylist />
          {Object.keys(trackId).length ? <Bar /> : ''}
        </>
        } />
      <Route
        path="/dancetracks"
        element={
          <>
            <DanceTracks />
            {Object.keys(trackId).length ? <Bar /> : ''}
          </>
        }  
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

import { Navigation } from './components/navigation.jsx'
import { Search } from './components/search.jsx'
import { Filter } from './components/filter.jsx'
import { PlaylistTitle } from './components/playlisttitle.jsx'
import { Playlist } from './components/playlist.jsx'
import { Sidebar } from './components/sidebar.jsx'
import { Bar } from './components/bar.jsx'
// import '../public/css/style.scss'

const App = () => {
  return (
    <div className="container">
      <main className="main">
        <Navigation />
        <div className="main__centerblock centerblock">
          <Search />
          <h2 className="centerblock__h2">Треки</h2>
          <Filter />
          <div className="centerblock__content">
            <PlaylistTitle />
            <Playlist />
          </div>
        </div>
        <Sidebar />
      </main>
      <Bar />
      <footer className="footer"></footer>
    </div>
  )
}

export default App
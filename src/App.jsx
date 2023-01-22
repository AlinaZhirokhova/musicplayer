import { Navigation } from './components/navigation/navigation.jsx'
import { Search } from './components/search/search.jsx'
import { Filter } from './components/filter/filter.jsx'
import { PlaylistTitle } from './components/playlisttitle/playlisttitle.jsx'
import { Playlist } from './components/playlist/playlist.jsx'
import { Sidebar } from './components/sidebar/sidebar.jsx'
import { Bar } from './components/bar/bar.jsx'

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

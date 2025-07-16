import './styles/site.less';
import './styles/reset.less';
import BusinessList from '../src/component/BusinessList';
import SearchBar from './component/SearchBar';

function App() {
  

  return (
    <>
      <header>
        <div className="header-bar">
          <div className="container">
            <h1>Ravenous</h1>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <SearchBar />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <BusinessList />
        </div>
      </main>
      <footer>
        <div className="container">
          <p>Created by Tina W</p>
        </div>
      </footer>
    </>
  )
}

export default App

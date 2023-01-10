import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import ThaiandsawatItem from './components/ThaiandsawatItem';
import ThaiandsawatPost from './components/ThaiandsawatPost';
import thaiandsawats from './data/Thaiandsawats';

function App() {
  const [selectedThaiandsawat, setSelectedThaiandsawat] = useState(thaiandsawats[null]);
  const [searchText, setSearchText] = useState('');

  function onThaiandsawatOpenClick(theThaiandsawat) {
    setSelectedThaiandsawat(theThaiandsawat);    
  }

  function onThaiandsawatCloseClick() {
    setSelectedThaiandsawat(null);
  }

      const thaiandsawatElements = thaiandsawats.filter((thaiandsawat) =>{
        return thaiandsawat.title.includes(searchText);
    }).map((thaiandsawat, index) => {
        return <ThaiandsawatItem key={index} thaiandsawat={thaiandsawat} onThaiandsawatClick={onThaiandsawatOpenClick} />;
      });

      let thaiandsawatPost = null;
      if (!!selectedThaiandsawat) {
          thaiandsawatPost = <ThaiandsawatPost thaiandsawat={selectedThaiandsawat} onBgClick={onThaiandsawatCloseClick} />
      }

      return (
      <div className="app" >
        <AppHeader />
        <section className="app-section">
          <div className="app-container">
            <AppSearch value={searchText} onValueChange={setSearchText} />
            <div className="app-grid">    
              {thaiandsawatElements}
            </div>
          </div>
        </section>
        {thaiandsawatPost}
      </div>
  );
}

export default App;

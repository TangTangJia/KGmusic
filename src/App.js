import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.tsx'
import Tabs from './component/tabs/tabs.tsx'
import Player from './component/player/player.tsx'
function App() {
  return (
    <div style={{ paddingBottom: 64 }}>
      <Header />
      <Tabs />
      <Player />
    </div>
  )
}

export default App;

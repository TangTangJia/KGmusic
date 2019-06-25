// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.tsx'
// import Tabs from './component/tabs/tabs.tsx'
import Player from './component/player/player.tsx'
// function App() {
//   return (
//     <div style={{ paddingBottom: 64 }}>
//       <Header />
//       {this.props.children}
//       <Tabs />
//       <Player />
//     </div>
//   )
// }

// export default App;

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div style={{ paddingBottom: 64 }}>
        <Header />
        {this.props.children}
        <Player />
      </div>
    )
  }
}

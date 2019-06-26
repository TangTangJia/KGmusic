import './App.css';
import Header from './component/header/header'
import Player from './component/player/player'

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

import React, { Component } from 'react'
import './player.scss'
export default class player extends Component {
    readonly state = {
        palyerFace: require('../../static/images/default.png')
    }
    render() {
        return (
            <div className="player">
                <div className="player_control"></div>
                <div className="player_panel">
                    <div className='song_face'>
                        <img src={this.state.palyerFace} alt="" />
                    </div>
                    <div className="player_tool">
                        <div className='player_play'></div>
                        <div className='player_next'></div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './player.scss'
export default class player extends Component {
    readonly state = {
        palyerFace: require('../../static/images/default.png'),
        isAct: false
    }
    render() {
        return (
            <div className="player">
                <div className={this.state.isAct ? 'player_panel act' : 'player_panel'}>
                    <div className="player_control" onClick={this.play}></div>
                    <div className='song_face'>
                        <img src={this.state.palyerFace} alt="" />
                    </div>
                    <div className="player_tool">
                        <div className='player_play'></div>
                        <div className='player_next'></div>
                    </div>
                </div>
            </div >
        )
    }
    play = () => {
        if (this.state.isAct) {
            this.setState({
                isAct: false
            })
        } else {
            this.setState({
                isAct: true
            })
        }

    }
}

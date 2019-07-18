import React, { Component } from "react"
import { Link } from 'react-router-dom'
import $http from '../../axios'
import './rankInfo.scss'
import { match } from 'react-router-dom'
export default class RankInfo extends Component<{ match: match<{ id: string }> }>{
    readonly state = {
        id: this.props.match.params.id,
        data: {
            info: {
                rankname: '',
                banner7url: ''
            },
            songs: {
                list: []
            }
        }
    }
    render() {
        return (
            <div className="rankInfo">
                <div className="top">
                    <div className='top_img'>
                        <img src={this.state.data.info.banner7url.replace('{size}', '400')} alt="" />
                    </div>
                    <div className="title_wrap">
                        <Link to='/'><div className="title_icon"></div></Link>
                        <div className="title">{this.state.data.info.rankname}</div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        {
                            this.state.data.songs.list.map((item: any, index: number) => {
                                return <li key={item.audio_id}>
                                    <div>
                                        <span>{index + 1} </span>
                                        {item.filename}
                                    </div>
                                    <div className='arrow'></div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        $http.get('/proxy/rank/info/&json=true&page=1&rankid=' + this.state.id).then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }
}
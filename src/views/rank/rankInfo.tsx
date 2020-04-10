// import React, { Component } from "react"
import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { match } from 'react-router-dom'
import $http from '../../axios'
import './rankInfo.scss'
interface Data {
    info: {
        rankname: string,
        banner7url: string
    },
    songs: {
        list: Array<[]>
    }
}
function RankInfo(props: { match: match<{ id: string }> }) {
    const [data, setData] = useState<Data>({ info: { rankname: '', banner7url: '' }, songs: { list: [] } })
    const id = props.match.params.id
    useEffect(() => {
        $http.get('/proxy/rank/info/&json=true&page=1&rankid=' + id).then((res: any) => {
            setData(res.data)
        })
    }, [])
    return (
        <div className="rankInfo">
            <div className="top">
                <div className='top_img'>
                    <img src={data.info.banner7url.replace('{size}', '400')} alt="" />
                </div>
                <div className="title_wrap">
                    <Link to='/'><div className="title_icon"></div></Link>
                    <div className="title">{data.info.rankname}</div>
                </div>
            </div>
            <div className="list">
                <ul>
                    {
                        data.songs.list.map((item: any, index: number) => {
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

export default RankInfo
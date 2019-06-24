import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './hotList.scss'
import $http from '../../axios'
function HotList() {
    const [hotList, setList] = useState([])
    useEffect(() => {
        $http.get('/proxy/plist/index&json=true').then(res => {
            console.log(res.data)
            setList(res.data.plist.list.info)
        })
    }, [])
    return (
        <div className="hot_list">
            <ul>
                {hotList.map((item: any) => {
                    return <li key={item.suid}>
                        <Link to={`/hotInfo/${item.specialid}`}>
                            <div className="left">
                                <img src={item.imgurl.replace('{size}', '400')} alt="" />
                            </div>
                            <div className="right">
                                <div className="title">{item.specialname}</div>
                                <div className="listen_num">
                                    <span className="listen_icon"></span>
                                    <span className="listen_count">{item.playcount}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default HotList
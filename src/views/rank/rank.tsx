import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import $http from '../../axios'
import './rank.scss'
function Rank() {
    const [rankList, setRank] = useState([])
    useEffect(() => {
        $http.get('/proxy/rank/list&json=true').then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div className="rank">
            <ul>
                <Link to={'/'}>
                    <li>
                        <div className='rank_left'>
                            <img src="http://imge.kugou.com/mcommon/400/20190214/20190214100330763258.jpg" alt="" />
                            <span>酷狗飙升榜</span>
                        </div>
                        <div className="rank_right"></div>
                    </li>
                </Link>
            </ul>
        </div>

    )
}
export default Rank
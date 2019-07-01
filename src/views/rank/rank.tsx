import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import $http from '../../axios'
import './rank.scss'
function Rank() {
    const [rankList, setRank] = useState([])
    useEffect(() => {
        $http.get('/proxy/rank/list&json=true').then(res => {
            console.log(res.data)
            setRank(res.data.rank.list)
        })
    }, [])
    return (
        <div className="rank">
            <ul>
                {
                    rankList.map((item: any) => {
                        return <Link to={`/rankInfo/${item.rankid}`}>
                            <li key={item.rankid}>
                                <div className='rank_left'>
                                    <img src={item.imgurl.replace('{size}', '400')} alt="" />
                                    <div>{item.rankname}</div>
                                </div>
                                <div className="rank_right"></div>
                            </li>
                        </Link>
                    })
                }
            </ul>
        </div>

    )
}
export default Rank
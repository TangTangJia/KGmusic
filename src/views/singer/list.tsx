import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import './list.scss'

function Slist() {
    return (
        <div className="sList">
            <Link to={'/singerList/88'}>
                <div className="first_group">
                    <div>热门歌手</div>
                    <div className="icon_riht"></div>
                </div>
            </Link>
            <div className="singer_group">
                <ul>
                    <li>
                        <Link to={'/singerList/1'}>
                            <div>华语男歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/2'}>
                            <div>华语女歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/3'}>
                            <div>华语组合</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="singer_group">
                <ul>
                    <li>
                        <Link to={'/singerList/4'}>
                            <div>日韩男歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/5'}>
                            <div>日韩女歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/6'}>
                            <div>日韩组合</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="singer_group">
                <ul>
                    <li>
                        <Link to={'/singerList/7'}>
                            <div>欧美男歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/8'}>
                            <div>欧美女歌手</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/singerList/9'}>
                            <div>欧美组合</div>
                            <div className="icon_riht"></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}
export default Slist
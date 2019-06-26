import React, { useState, useEffect } from 'react'
import './search.scss'
function Search() {
    const [resultList, setResult] = useState([])
    return (
        <div className="search_page">
            <div className="search_top">
                <div className="search_box">
                    <div className="icon"></div>
                    <input type="text" />
                </div>
                <div className="btn_search">搜 索</div>
            </div>
            <div className="search_hot">
                <div className="title">热门搜索</div>
                <div className="search_list">
                    <ul>
                        <li>
                            <div>独家首发</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>热门综艺</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>影视原声</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>儿歌大全</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>动漫</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>洗脑电音</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>古风好歌</div>
                            <div className='arrow'></div>
                        </li>
                        <li>
                            <div>情歌大全</div>
                            <div className='arrow'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search

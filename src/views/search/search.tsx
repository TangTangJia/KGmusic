import React, { useState, useEffect } from 'react'
import './search.scss'
import $http from '../../axios'
function Search() {
    const lists = [{
        filename: '独家首发',
        album_audio_id: 1111
    },
    {
        filename: '热门综艺',
        album_audio_id: 2222
    },
    {
        filename: '影视原声',
        album_audio_id: 3333
    },
    {
        filename: '儿歌大全',
        album_audio_id: 4444
    },
    {
        filename: '动漫',
        album_audio_id: 5555
    },
    {
        filename: '洗脑电音',
        album_audio_id: 6666
    },
    {
        filename: '古风好歌',
        album_audio_id: 7777
    },
    {
        filename: '情歌大全',
        album_audio_id: 8888
    }]
    const [resultList, setResult] = useState(lists)
    const [inputValue, setValue] = useState('')
    function searchData(value: string) {
        $http.get('/sproxy/search/song?format=json&page=1&pagesiez=20&showtype=1',
            { params: { keyword: value } }).then(res => {
                console.log(res)
                if (res.data.status === 1) {
                    setResult(res.data.data.info)
                } else {
                    setResult(lists)
                }
            })
    }
    return (
        <div className="search_page">
            <div className="search_top">
                <div className="search_box">
                    <div className="icon"></div>
                    <input type="text" value={inputValue} onChange={(e) => { setValue(e.target.value) }} />
                </div>
                <div className="btn_search" onClick={() => { searchData(inputValue) }}>搜 索</div>
            </div>
            <div className="search_hot">
                <div className="title">热门搜索</div>
                <div className="search_list">
                    <ul>
                        {
                            resultList.map((item: any, index: number) => {
                                return <li key={item.album_audio_id} onClick={() => setValue(item.filename)}>
                                    <div className='name'>{item.filename}</div>
                                    <div className='arrow'></div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Search

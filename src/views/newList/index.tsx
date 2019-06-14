import React, { useState, useEffect } from 'react'
import $http from '../../axios'
import './index.scss'
function NewList() {
    const [songList, setList] = useState([])
    useEffect(() => {
        $http.get('/proxy/?json=true').then(res => {
            // console.log(res.data.data)
            setList(res.data.data)
        })
    }, [])
    return (
        <ul className='newList'>
            {songList.map((item: any) => {
                return <li key={item.audio_id}>
                    <div>{item.filename}</div>
                    <div className='arrow'></div>
                </li>
            })}
        </ul>
    )
}
export default NewList
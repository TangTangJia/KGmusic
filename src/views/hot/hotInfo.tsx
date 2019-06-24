import React, { Component } from 'react'

export default class hotInfo extends Component {
    render() {
        return (
            <div className="info">
                <div className="top">
                    <div className='top_img'>
                        <div className="title">入坑Vocaloid必听的那些传说级名曲</div>
                    </div>
                    <div className="top_desc">
                        Vocaloid传说极名曲，指在n站播放量达到100W的Vocaloid歌曲，作为入坑Vocaloid的新人来说，这些歌曲无疑是最好的选择封面Pixiv
                </div>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <div>初音ミク、黒うさP - 千本桜</div>
                            <div className='arrow'></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

import React, { useState, useEffect } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import $http from '../../axios'
import './index.scss'
// import React, { Component } from 'react'

// export default class NewList extends Component {
//     readonly state = {
//         songList: [],
//         bannerList: []
//     }
//     render() {
//         return (
//             <div>
//                 <WingBlank>
//                     <Carousel
//                         autoplay={false}
//                         infinite
//                         beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//                         afterChange={index => console.log('slide to', index)}
//                     >
//                         {this.state.bannerList.map((val: any) => (
//                             <a
//                                 key={val.id}
//                                 href="http://www.alipay.com"
//                                 style={{ display: 'inline-block', width: '100%' }}
//                             >
//                                 <img
//                                     src={val.imgurl}
//                                     alt=""
//                                     style={{ width: '100%', verticalAlign: 'top' }}
//                                     onLoad={() => {
//                                         // fire window resize event to change height
//                                         window.dispatchEvent(new Event('resize'));
//                                         // this.setState({ imgHeight: 'auto' });
//                                     }}
//                                 />
//                             </a>
//                         ))}
//                     </Carousel>
//                 </WingBlank>
//                 <ul className='newList'>
//                     {this.state.songList.map((item: any) => {
//                         return <li key={item.audio_id}>
//                             <div>{item.filename}</div>
//                             <div className='arrow'></div>
//                         </li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
//     componentDidMount() {
//         $http.get('/proxy/?json=true').then(res => {
//             // console.log(res.data.data)
//             this.setState({
//                 bannerList: res.data.banner,
//                 songList: res.data.data
//             })
//         })
//     }
// }

function NewList() {
    const [songList, setList] = useState([])
    const [bannerList, setBanner] = useState([])
    useEffect(() => {
        $http.get('/proxy/?json=true').then(res => {
            // console.log(res.data.data)
            setList(res.data.data)
            setBanner(res.data.banner)
        })
    }, [])
    return (
        <div>
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {bannerList.map((val: any) => (
                        <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={val.imgurl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    // this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
            <ul className='newList'>
                {songList.map((item: any) => {
                    return <li key={item.audio_id}>
                        <div>{item.filename}</div>
                        <div className='arrow'></div>
                    </li>
                })}
            </ul>
        </div>

    )
}
export default NewList
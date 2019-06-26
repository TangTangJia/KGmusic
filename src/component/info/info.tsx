import React, { Component } from 'react'
import './info.scss'
export default class hotInfo extends Component<{ data: any }>{
    readonly state = {
        isOpen: false
    }
    render() {
        return (
            <div className="info">
                <div className="top">
                    <div className='top_img'>
                        <img src={this.props.data.info.list.imgurl.replace('{size}', '400')} alt="" />
                    </div>
                    <div className="title_wrap">
                        <div className="title">{this.props.data.info.list.specialname}</div>
                    </div>
                    <div className="top_desc">
                        <div className={this.state.isOpen ? 'desc_text_open' : 'desc_text'}>{this.props.data.info.list.intro}</div>
                        <div className="desc_icon" onClick={this.changeOpen}></div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        {
                            this.props.data.list.list.info.map((item: any) => {
                                return <li key={item.audio_id}>
                                    <div>{item.filename}</div>
                                    <div className='arrow'></div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    changeOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

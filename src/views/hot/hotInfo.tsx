import React, { Component } from 'react'
import $http from '../../axios'
import Info from '../../component/info/info'
import { match } from 'react-router-dom'
export default class hotInfo extends Component<{ match: match<{ id: string }> }> {
    readonly state = {
        id: this.props.match.params.id,
        data: {},
        isShow: false
    }
    render() {
        let element;
        if (this.state.isShow) {
            element = <Info data={this.state.data} />
        } else {
            element = <div></div>
        }
        return (
            <div className='info'>
                {element}
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        $http.get('/proxy/plist/list/?json=true&page=1&specialid=' + this.state.id).then(res => {
            console.log(res.data)
            this.setState({
                data: res.data
            }, () => {
                this.setState({
                    isShow: true
                })
            })
        })
    }
}

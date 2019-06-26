import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from '../../static/images/logo.png'
export default class header extends Component<{ history: any }> {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                {/* <Link to='/search'><div className="search"></div></Link> */}
                <div className="search" onClick={this.goSearch}></div>
            </div>
        )
    }
    goSearch = () => {
        console.log(this.props.history)
    }
}

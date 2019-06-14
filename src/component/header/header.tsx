import React, { Component } from 'react'
import './header.scss'
import logo from '../../static/images/logo.png'
export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search"></div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './header.scss'
import logo from '../../static/images/logo.png'
class header extends Component<{ history: any, location: any }> {
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
        console.log(this.props)
        if (this.props.location.pathname === '/search') {
            this.props.history.goBack()
        } else {
            this.props.history.push('/search')
        }

    }
}
export default withRouter((header) as any)
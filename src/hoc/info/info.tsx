import React, { Component } from 'react'
import './info.scss'
export default (WrappedComponent: any) => {
    return class extends Component {
        readonly state = {
            data: {}
        }
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
}


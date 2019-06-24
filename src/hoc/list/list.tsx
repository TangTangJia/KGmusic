import React, { Component } from 'react'

export default (WrappedComponent: any) => {
    class withCompont extends Component {
        render() {
            return <WrappedComponent />
        }
    }
    return withCompont
}

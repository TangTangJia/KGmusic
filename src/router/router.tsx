import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from '../App.js'
import HotInfo from '../views/hot/hotInfo'
import Tabs from '../component/tabs/tabs'
export default class ROUTER extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route>
                        <App>
                            <Route exact path='/' component={Tabs}></Route>
                            <Route path='/hotInfo/:id' component={HotInfo}></Route>
                        </App>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
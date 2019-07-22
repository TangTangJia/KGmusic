import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App.js'
import HotInfo from '../views/hot/hotInfo'
import Tabs from '../component/tabs/tabs'
import Search from '../views/search/search'
import RankInfo from '../views/rank/rankInfo'
export default class ROUTER extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route>
                        <App>
                            <Route exact path='/' component={Tabs}></Route>
                            <Route path='/hotInfo/:id' component={HotInfo}></Route>
                            <Route path='/search' component={Search}></Route>
                            <Route path='/rankInfo/:id' component={RankInfo}></Route>
                        </App>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
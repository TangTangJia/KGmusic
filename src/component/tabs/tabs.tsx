import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import './tabs.scss'
import Newlist from '../../views/newList/index'
import HotList from '../../views/hot/hotList'
import Rank from '../../views/rank/rank'
import Slist from '../../views/singer/list'
const tabs2 = [
    { title: '新歌', sub: '1' },
    { title: '排行', sub: '2' },
    { title: '热歌', sub: '3' },
    { title: '歌手', sub: '4' },
];
export default class tabs extends Component {
    render() {
        return (
            <div className="tabs">
                <Tabs tabs={tabs2}
                    initialPage={0}
                    swipeable={false}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ flex: 1, backgroundColor: '#fff' }}>
                        <Newlist />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
                        <Rank />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
                        <HotList />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
                        <Slist />
                    </div>
                </Tabs>
            </div>
        )
    }
}


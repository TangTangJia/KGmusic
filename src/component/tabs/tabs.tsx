import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import './tabs.scss'
import Newlist from '../../views/newList/index'
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
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ flex: 1, backgroundColor: '#fff' }}>
                        <Newlist />
                    </div>
                    <div style={{ flex: 1, backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ flex: 1, backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ flex: 1, backgroundColor: '#fff' }}>

                    </div>
                </Tabs>
            </div>
        )
    }
}


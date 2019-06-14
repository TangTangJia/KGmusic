import React, { Component } from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import './tabs.scss'
const tabs2 = [
    { title: 'First Tab', sub: '1' },
    { title: 'Second Tab', sub: '2' },
    { title: 'Third Tab', sub: '3' },
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: '#fff' }}>

                    </div>
                </Tabs>
            </div>
        )
    }
}


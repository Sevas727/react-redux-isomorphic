import React from 'react'
import {Link} from 'react-router'
import {preload} from 'react-isomorphic-render/redux'
import {connect} from 'react-redux'

@preload(({dispatch, fetchData})=>fetchData('/events', 'events')(dispatch))
@connect((state)=>{
    return {events: state.fetchData.events}
})
export default class App extends React.Component{
    render(){
    const events = this.props.events
        return (
            <div>
                App component ;)<br/>
                List:<br/>
                <ul>
                    {events.items.map((item, index)=>{
                        return <li key={index}><Link to={`/event${item.id}`}>{item.name}</Link></li>
                    })}
                </ul>

            </div>
        )
    }
}

import React from 'react'
import { asyncConnect } from 'redux-connect'
import {Link} from 'react-router'
import fetch from 'isomorphic-fetch'

@asyncConnect([{
    key: 'events',
    promise: () => fetch('http://api.itboost.org:88/app_dev.php/api/events').then((response) => response.json())
}])
export default class App extends React.Component{
    render(){
    const events = this.props.events.response
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
import React from 'react'
import {Link} from 'react-router'

export default class Main extends React.Component{
    render(){
        return <div>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}
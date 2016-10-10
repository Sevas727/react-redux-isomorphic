import React from 'react'
import {Link} from 'react-router'
import { head } from 'react-isomorphic-render'
import LoadingBar from 'react-redux-loading-bar'
export default class Main extends React.Component{

    render(){
        const title = 'WebApp'
        // const description = 'A generic web application boilerplate'

        const meta =
            [
                // <meta charset="utf-8"/>
                { charset: 'utf-8' },

                // <meta name="..." content="..."/>
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

                // <meta property="..." content="..."/>
                { property: 'og:title',       content: 'International Bodybuilders Club' },
                { property: 'og:description', content: 'Do some push ups' },
                { property: 'og:locale',      content: 'ru-RU' }
            ]

        return(
            <div>
                <LoadingBar updateTime={50} maxProgress={95} progressIncrease={5} style={{top: 0, height: '2px'}}/>
                {head(title, meta)}
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
        )
    }
}
import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import styler               from 'react-styling'

export default class Not_found extends Component
{
    render(){
        return (
            <div>
                {title('Page not found')}
                <h1 style={style.header}>
                    Page not found
                </h1>
            </div>
        )
    }
}

const style = styler`
	header
		text-align: center
`
import React from 'react'
import {preload} from 'react-isomorphic-render/redux'
import {connect} from 'react-redux'

@preload(({dispatch, parameters, fetchData})=>dispatch(fetchData(`/event/${parameters.id}`, 'event')))
@connect((state)=>{
    return {
        event: state.fetchData.event
    }
})
export default class Event extends React.Component{
    render(){
        const {event, status} = this.props.event
        return (
            <div>
                Event component ;)<br/>
                <p>{status}</p>
                <div dangerouslySetInnerHTML={{__html: event.description}}></div>
            </div>
        )
    }
}
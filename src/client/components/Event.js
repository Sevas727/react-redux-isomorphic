import React from 'react'
import { asyncConnect } from 'redux-connect'
import fetch from 'isomorphic-fetch'

@asyncConnect([{
    key: 'event',
    promise: ({ params }) => fetch(`http://api.itboost.org:88/app_dev.php/api/event/${params.id}`).then((response) => response.json())
}])
export default class Event extends React.Component{
    render(){
        const response = this.props.event.response
        return (
            <div>
                Event component ;)<br/>

                <div dangerouslySetInnerHTML={{__html: response.event.description}}></div>
            </div>
        )
    }
}
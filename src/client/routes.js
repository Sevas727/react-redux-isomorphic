import React from 'react'
import { Route } from 'react-router'
import Layout from './components/Layout'
import App from './pages/App'
import Event from './pages/Event'
import NotFound from './pages/not found'

export default function() // ({ dispatch, getState })
{
	return(
		<div>
			<Route path='/' component={Layout}>
				<Route path='events' component={App}/>
				<Route path='event:id' component={Event}/>
				<Route path='*' component={NotFound}/>
			</Route>
		</div>
	)
}

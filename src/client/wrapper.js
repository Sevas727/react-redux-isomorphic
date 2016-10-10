import React from 'react'
import { Provider } from 'react-redux'

export default class Wrapper extends React.Component
{
	static propTypes = 
	{
		store : React.PropTypes.object.isRequired
	}

	// all React "prop"erty providers go here.
	// e.g. redux Provider, react-intl IntlProvider.
	//
	render()
	{
		const { store } = this.props

		return(
			<Provider store={store}>
				{this.props.children}
			</Provider>
		)
	}
}
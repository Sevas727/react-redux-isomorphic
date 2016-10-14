import React from 'react'
import { Provider } from 'react-redux'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();
// import {green100, green500, green700} from 'material-ui/styles/colors'

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

		// for Material-ui
		// const muiTheme = getMuiTheme({
		// 	palette: {
		// 		primary1Color: green500,
		// 		primary2Color: green700,
		// 		primary3Color: green100
		// 	},
		// }, {
		// 	avatar: {
		// 		borderColor: null,
		// 	},
		// 	userAgent: store.getState().navigator.userAgent
		// })
		//
		return(
			<Provider store={store}>
				{this.props.children}
			</Provider>
		)
	}
}
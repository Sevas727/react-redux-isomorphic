
const initialState = {
    list: []
}

export default function appState(state = initialState, action) {
    switch (action.type){
        case 'success':
            return {...state, list: action.payload}
        default:
            return state
    }
}
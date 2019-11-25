const INITIAL_STATE = {
    description:  '',
    list: []
}


export default (state = INITIAL_STATE, action) => {
    //evoluir estado
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
                return { ...state, description: action.payload } //refletir nova description
            break;
        case 'TODO_SEARCHED':
                return { ...state, list: action.payload }
            break;
        // case 'TODO_ADDED':
        case 'TODO_CLEAR':
                return {...state, description: '' }
            break;
        default:
                return state
            break;
    }
}
import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

//combina todos reducers
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer
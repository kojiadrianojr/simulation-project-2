import REDUCER_API from "./data";
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    MAIN: REDUCER_API
})

export default rootReducer
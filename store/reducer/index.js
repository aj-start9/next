import { combineReducers } from "redux";
import reducerA from './reducerA';
import reducerB from './reducerB';


const rootReducer = combineReducers({
    reducerA: reducerA,
    reducerB: reducerB
})

export default rootReducer
import { combineReducers } from "redux";
import reducerA from './reducerA';
import reducerB from './reducerB';


const rootReducer = combineReducers({
    reducerA,
    reducerB
})

export default rootReducer
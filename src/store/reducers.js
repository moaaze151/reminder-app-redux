import {combineReducers} from "redux";
import reminder from "./reducers/reminder";
//Here import All reducers component
const reducers = combineReducers({
    //here name of imported components
    reminder,
});
export default reducers;
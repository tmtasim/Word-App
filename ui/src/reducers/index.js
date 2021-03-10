import {combineReducers} from 'redux';
import {messagesReducer} from "./messages.reducer.js";

const appReducer = combineReducers({
    messages: messagesReducer
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};


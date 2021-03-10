import {ADD_MESSAGE, CLEAN_MESSAGES_DATA, LOAD_ALL_MESSAGES} from "../actions/messages.actions";

let initialState = {
    messages: []
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_MESSAGES_DATA.CLEAR:
            return initialState;
        case LOAD_ALL_MESSAGES.SUCCESS:
            return {
                ...state,
                messages: action.payload,
            };
        case LOAD_ALL_MESSAGES.CLEAR:
            return {
                ...state,
                messages: [],
            };
        default:
            return state;
    }
};

import {actionCreator, createRequestTypes} from "../utils/helpers";
import axiosInstance from "../utils/axios-instance";
export const ADD_MESSAGE = createRequestTypes('ADD_MESSAGE');
export const CLEAN_MESSAGES_DATA = createRequestTypes('CLEAN_MESSAGES_DATA');
export const LOAD_ALL_MESSAGES = createRequestTypes('LOAD_ALL_MESSAGES');

export const cleanMessagesData = () => async (dispatch) => {
    dispatch(actionCreator.clear(CLEAN_MESSAGES_DATA));
}

export const addMessage = (message) => async (dispatch) => {
    console.log("Trying to send " + JSON.stringify(message))
    dispatch(actionCreator.request(ADD_MESSAGE));
    try {
        const response = await axiosInstance.post('/api/v1/message', message);
        dispatch(actionCreator.success(ADD_MESSAGE, response.data));
        return response.data;
    } catch (err) {
        let mockError = err.response;
        dispatch(actionCreator.failure(ADD_MESSAGE, mockError));
        return err.response;
    }
}

export const loadAllMessages = () => async (dispatch) => {
    dispatch(actionCreator.request(LOAD_ALL_MESSAGES));
    try {
        const response = await axiosInstance.get('/api/v1/message');
        dispatch(actionCreator.success(LOAD_ALL_MESSAGES, response.data));
        return response.data;
    } catch (err) {
        let mockError = err.response;
        dispatch(actionCreator.failure(LOAD_ALL_MESSAGES, mockError));
        return err.response;
    }
}



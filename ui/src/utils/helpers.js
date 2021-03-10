// Helper function to create simple action
export const action = (type, payload = {}) => {
    return {type, ...payload};
};

export const verboseAction = (type, payload = {}) => {
    return {
        type: type,
        payload: {...payload}
    };
};

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const EMPTY = 'EMPTY';
const CLEAR = 'CLEAR';
const MESSAGE = 'MESSAGE';

export const createRequestTypes = (base) => {
    return [REQUEST, SUCCESS, FAILURE, CLEAR, EMPTY, MESSAGE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

export const actionCreator = {
    request: (type) => action(type.REQUEST),
    success: (type, payload) => action(type.SUCCESS, {payload}),
    failure: (type, error) => verboseAction(type.FAILURE, error),
    empty: (type) => action(type.EMPTY),
    clear: (type) => action(type.CLEAR),
    message: (type, payload) => action(type.MESSAGE, {payload}),
};

export const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;


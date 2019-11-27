import * as ActionTypes from './ActionType';

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    };
};

export const asyncincrement = () => {
    return {
        type: 'INCREMENT_ASYNC'
    };
};

export const asyncdecrement = () => {
    return {
        type: 'DECREMENT_ASYNC'
    };
};

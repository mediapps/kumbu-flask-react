import {
    EMAIL_CHANGED,
    NAME_CHANGED,
    PASSWORD_CHANGED,
    AUTH_USER_SUCCESS,
    AUTH_USER_FAIL,
    AUTH_USER,
    LOG_OUT
} from './types';

export const emailChanged = (text) => {
    let emailEdited = true;
    if (text === '') {
        emailEdited = false;
    }
    return {
        type: EMAIL_CHANGED,
        payload: {
            text,
            emailEdited
        }
    };
};

export const nameChanged = (text) => {
    let nameEdited = true;
    if (text === '') {
        nameEdited = false;
    }
    return {
        type: NAME_CHANGED,
        payload: {
            text,
            nameEdited
        }
    };
};
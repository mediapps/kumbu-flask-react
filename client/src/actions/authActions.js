import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
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

export const passwordChanged = (text) => {
    let passwordEdited = true;
    if (text === '') {
        passwordEdited = false;
    }
    return {
        type: PASSWORD_CHANGED,
        payload: {
            text,
            passwordEdited
        }
    };
};

export const logout = () => {
    return {
        type: LOG_OUT,
        payload: {}
    };
};

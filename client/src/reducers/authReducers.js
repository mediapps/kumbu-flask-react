import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOG_OUT
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    emailEdited: false,
    password: '',
    passwordEdited: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            {
                const { text, emailEdited } = action.payload;
                return {
                    ...state,
                    email: text,
                    emailEdited
                };
            }
        case PASSWORD_CHANGED:
            {
                const { text, passwordEdited } = action.payload;
                return {
                    ...state,
                    password: text,
                    passwordEdited
                };
            }
        case LOG_OUT:
            {
                return {
                    ...INITIAL_STATE
                };
            }
        default:
            return state;
    }
};

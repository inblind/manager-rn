import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, CLEAR_ERROR, LOGIN_USER_LOADING} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loading: false, error: '', user: null}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload};
            break;

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};
            break;
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload};
            break;
        
        case LOGIN_USER_FAILED:
            return { ...state, error: action.payload, loading: false};
            break;
        case LOGIN_USER_LOADING:
            return { ...state, error: '', loading: true};
            break;
        default:
            return state;
    }
};
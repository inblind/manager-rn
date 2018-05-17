import {EMAIL_CHANGED, PASSWORD_CHANGED} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loading: '', error: '', user: null}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case EMAIL_CHANGED:
            console.log(action.payload);
            return { ...state, email: action.payload};
            break;

        case PASSWORD_CHANGED:
            //console.log(action.payload);
            return { ...state, password: action.payload};
            break;
        default:
            return state;
    }
};
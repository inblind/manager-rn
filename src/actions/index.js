import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, 
        PASSWORD_CHANGED, 
        LOGIN_USER_SUCCESS, 
        LOGIN_USER_FAILED, 
        LOGIN_USER_LOADING} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        
        dispatch({type: LOGIN_USER_LOADING});

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( user => loginUserSuccess(dispatch, user))
            .catch( (e) => loginUserFailed({dispatch, e}))
        });
    };
;}

const loginUserFailed = ({dispatch, e}) => {
    dispatch({
        type: LOGIN_USER_FAILED,
        payload: e.message
    });
}

const loginUserSuccess = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
}
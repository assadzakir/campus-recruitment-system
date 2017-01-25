/**
 * Created by assad on 1/25/17.
 */
import {ActionReducer, Action} from '@ngrx/store';
import * as auth_collection from '../actions/auth-action'
import {UserAuth} from "../model/user-auth";

const InitalState = {
    isLoading: false,
    isLoggedin: false,
    isRegistered: false,
    user: null,
};

export const AuthReducer: ActionReducer<UserAuth> = (state: UserAuth = InitalState, action: auth_collection.Actions) => {
    if (action && action.type) {
        switch (action.type) {
            case auth_collection.ActionTypes.SIGN_IN:
                return Object.assign({}, state);
            case auth_collection.ActionTypes.SIGN_IN_FAIL:
                return Object.assign({}, state, {isLoading: false, isLoggedin: false, user: null});
            case auth_collection.ActionTypes.SIGN_IN_SUCCESS:
                return Object.assign({}, state, {isLoading: false, isLoggedin: true, user: action.payload});
            // case SIGN_OUT_ERROR:
            //     return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
            // case SIGN_OUT_SUCCESS:
            //     return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
            case auth_collection.ActionTypes.SIGN_UP:
                return Object.assign({}, state);
            case auth_collection.ActionTypes.SIGN_UP_SUCCESS:
                return Object.assign({}, state, {isLoading: false, isRegistered: true, user: action});
            case auth_collection.ActionTypes.SIGN_UP_FAIL:
                return Object.assign({}, state, {isLoading: false});
            default:
                return state;
        }
    }
};
/**
 * Created by assad on 1/25/17.
 */
import { Action } from '@ngrx/store';
import { UserAuth } from '../model/user-auth';

export const ActionTypes = {
    SIGN_IN:                 'SIGN_IN',
    SIGN_IN_FAIL:            'SIGN_IN_FAIL',
    SIGN_IN_SUCCESS:         'SIGN_IN_SUCCESS',
    SIGN_UP:                 'SIGN_UP',
    SIGN_UP_FAIL:            'SIGN_UP_FAIL',
    SIGN_UP_SUCCESS:         'SIGN_UP_SUCCESS',
    LOG_OUT:                'LOG_OUT',
    LOG_OUT_SUCCESS:        'LOG_OUT_SUCCESS',
    LOG_OUT_FAIL:           'LOG_OUT_FAIL',
};

/**
 * Auth Actions
 */
export class SignIn implements Action {
    type = ActionTypes.SIGN_IN;

    constructor(public payload: UserAuth) { }
}

export class SignInSuccess implements Action {
    type = ActionTypes.SIGN_IN_SUCCESS;

    constructor(public payload: UserAuth) { }
}

export class SignInFail implements Action {
    type = ActionTypes.SIGN_IN_FAIL;

    constructor(public payload: UserAuth) { }
}
export class SignUp implements Action {
    type = ActionTypes.SIGN_UP;

    constructor(public payload: UserAuth) { }
}

export class SignUpSuccess implements Action {
    type = ActionTypes.SIGN_UP_SUCCESS;

    constructor(public payload: UserAuth) { }
}

export class SignUpFail implements Action {
    type = ActionTypes.SIGN_IN_FAIL;

    constructor(public payload: UserAuth) { }
}

export class logOut implements Action {
    type = ActionTypes.LOG_OUT;

    constructor(public payload?: UserAuth) { }
}

export class logOutSuccess implements Action {
    type = ActionTypes.LOG_OUT_SUCCESS;

    constructor(public payload: UserAuth) { }
}

export class logOutFail implements Action {
    type = ActionTypes.LOG_OUT_FAIL;

    constructor(public payload: UserAuth) { }
}

export type Actions
    = SignIn
    | SignInSuccess
    | SignInFail
    | SignUp
    | SignUpSuccess
    | SignUpFail
    | logOut
    | logOutSuccess
    | logOutFail

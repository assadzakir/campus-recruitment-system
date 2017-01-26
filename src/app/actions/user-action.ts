/**
 * Created by assad on 1/26/17.
 */
import { Action } from '@ngrx/store';
import { UserI } from '../model/user-model';

export const ActionTypes = {
    ADD_USER:             'ADD_USER',
    ADD_USER_SUCCESS:     'ADD_USER_SUCCESS',
    ADD_USER_FAIL:        'ADD_USER_FAIL',
};

/**
 * Add User
 */
export class AddUserAction implements Action {
    type = ActionTypes.ADD_USER;

    constructor(public payload: UserI) { }
}

export class AddUserSuccessAction implements Action {
    type = ActionTypes.ADD_USER_SUCCESS;

    constructor(public payload: UserI) { }
}

export class AddUserFailAction implements Action {
    type = ActionTypes.ADD_USER_FAIL;

    constructor(public payload: UserI) { }
}

export type Actions
    = AddUserAction
    | AddUserSuccessAction
    | AddUserFailAction

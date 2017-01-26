/**
 * Created by assad on 1/25/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'
import * as auth_collection from '../actions/auth-action';
import {Action} from "@ngrx/store";
import {UserAuth} from "../model/user-auth";
import { of } from 'rxjs/observable/of';
import {AuthService} from "../services/auth-services";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private fb: AuthService){};

    @Effect()
    SignIn$: Observable<Action> = this.actions$
        .ofType(auth_collection.ActionTypes.SIGN_IN)
        .map((action: auth_collection.SignIn) => action.payload)
        .mergeMap(user =>
            this.fb.SignIn(user)
                .map(() => new auth_collection.SignInSuccess(user))
                .catch(() => of(new auth_collection.SignInFail(user)))
        );

    @Effect()
    SignUp$: Observable<Action> = this.actions$
        .ofType(auth_collection.ActionTypes.SIGN_UP)
        .map((action: auth_collection.SignIn) => action.payload)
        .mergeMap(user =>
            this.fb.SignUp(user)
                .map(() => {new auth_collection.SignUpSuccess(user)})
                .catch(() => of(new auth_collection.SignUpFail(user)))
        );

    @Effect()
    LogOut$: Observable<Action> = this.actions$
        .ofType(auth_collection.ActionTypes.LOG_OUT)
        .map((action: auth_collection.SignIn) => action.payload)
        .mergeMap(user =>
            this.fb.logout()
                .map(() => new auth_collection.logOutSuccess(user))
                .catch(() => of(new auth_collection.logOutFail(user)))
        );


}
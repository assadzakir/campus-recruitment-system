/**
 * Created by assad on 1/26/17.
 */
import {Injectable} from '@angular/core';
import {Effect, toPayload, Actions } from '@ngrx/effects';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap'
import * as user_collection from '../actions/user-action';
import {Action} from "@ngrx/store";
import {UserAuth} from "../model/user-auth";
import { of } from 'rxjs/observable/of';
import {AuthService} from "../services/auth-services";

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private fb: AuthService){};

    @Effect()
    addUser$: Observable<Action> = this.actions$
        .ofType(user_collection.ActionTypes.ADD_USER)
        .map((action: user_collection.AddUserAction) => action.payload)
        .mergeMap(user =>
            this.fb.addUser(user)
                .map(() => new user_collection.AddUserSuccessAction(user))
                .catch(() => of(new user_collection.AddUserFailAction(user)))
        );
}
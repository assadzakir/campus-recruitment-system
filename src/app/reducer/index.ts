/**
 * Created by assad on 1/25/17.
 */
import {combineReducers, ActionReducer} from '@ngrx/store';
import {AuthReducer} from './auth-reducer';
import {AppState} from "../model/app-state";


const reducers = {
    userProfile: AuthReducer,
};

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}
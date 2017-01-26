/**
 * Created by assad on 1/25/17.
 */

import {UserAuth} from "./user-auth";
import {UserI} from "./user-model";

export interface AppState {
    userProfile: UserAuth;
    user:UserI
}
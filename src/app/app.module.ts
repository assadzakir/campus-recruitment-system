import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig ,firebaseAuthConfig} from '../environments/firebase-config';
import { AngularFireModule } from 'angularfire2';
import {MaterialModule} from "@angular/material"
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

import {reducer} from './reducer/index';
import {AuthEffects} from './effects/Auth-Effects';
import {UserEffects} from './effects/user-effects';

import { AuthModule } from './components/auth/auth.module';
import { DashModule } from './components/dashboard/dashboard.module';
import { AppComponent ,PageNotFoundComponent } from './app.component';
import { AppRouting } from './app-routing';
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth-services";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    AuthModule,
    DashModule,
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(AuthEffects),
    EffectsModule.runAfterBootstrap(UserEffects),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

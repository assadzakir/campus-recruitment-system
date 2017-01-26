/**
 * Created by assad on 1/25/17.
 */
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MdDialogRef} from "@angular/material"
import { AngularFire, FirebaseApp } from 'angularfire2';
import * as auth_collection from '../../actions/auth-action';
import {Store} from "@ngrx/store";
import {AppState} from "../../model/app-state";

@Component({
  templateUrl: './signup.component.html'
})

export class SignupComponent {
  public error: any;

  constructor(public store:Store<AppState>,private af: AngularFire, private router: Router) {  }

  onSubmit(formData) {
    this.store.dispatch(new auth_collection.SignUp(formData.value));
    // if(formData.valid) {
    //   console.log(formData.value);
    //   this.af.auth.createUser({
    //     email: formData.value.email,
    //     password: formData.value.password
    //   }).then(
    //     (success) => {
    //       console.log(success);
    //       this.router.navigate(['/login'])
    //     }).catch(
    //     (err) => {
    //       console.log(err);
    //       this.router.navigate(['/login']);
    //     })
    // } else {
    //   this.error = 'Your form is invalid';
    // }
  }
}

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  public error: any;

  constructor(public store:Store<AppState>,private af: AngularFire, private router: Router) { }

  onSubmit(formData) {
    this.store.dispatch(new auth_collection.SignIn(formData.value));
    // if(formData.valid) {
    //   console.log(formData.value);
    //   this.af.auth.login({
    //     email: formData.value.email,
    //     password: formData.value.password
    //   }).then(
    //       (success) => {
    //         console.log(success);
    //         this.router.navigate(['/dashboard']);
    //       }).catch(
    //       (err) => {
    //         console.log(err);
    //         this.router.navigate(['/dashboard']);
    //       })
    // } else {
    //   this.error = 'Your form is invalid';
    // }
  }
}

@Component({
  templateUrl: './resetpassword.component.html'
})

export class ResetpassComponent {
  public auth: any;
  public message: any;
  constructor(private af: AngularFire, @Inject(FirebaseApp) firebaseApp: any) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log('Submission worked');
      this.auth.sendPasswordResetEmail(formData.value.email)
        .then( (response) => {
          console.log('Sent successfully');
          this.message = 'Check your email for reset link';
        })
        .catch( (error) => {
          this.message = error;
          console.log(error);
        })
    }
  }
}

import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./model/app-state";
import {MdDialogRef, MdDialog} from "@angular/material"
import {LoginComponent} from "./components/auth/auth.component";
import * as auth_collection from '../app/actions/auth-action'
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public dialog: MdDialog,public store:Store<AppState>,private af: AngularFire, private router: Router) {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/'])
  }
  dialogRef: MdDialogRef<LoginComponent>;

  openDialog() {
    this.dialogRef = this.dialog.open(LoginComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.store.dispatch(new auth_collection.SignIn(result));
      this.dialogRef = null;
    });
  }

}

@Component({
  templateUrl: './page.not.found.html'
})
export class PageNotFoundComponent {}

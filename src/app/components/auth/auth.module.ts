/**
 * Created by assad on 1/25/17.
 */
import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { authRouting } from './auth.routing';
import { LoginComponent, SignupComponent, ResetpassComponent } from './auth.component';

@NgModule({
  imports:      [
    authRouting,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    ResetpassComponent
  ],
  entryComponents: [
    LoginComponent,
  ],
})
export class AuthModule { }

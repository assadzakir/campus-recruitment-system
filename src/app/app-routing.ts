/**
 * Created by assad on 1/25/17.
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    DashboardComponent,
} from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
// import { LoginComponent, SignupComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

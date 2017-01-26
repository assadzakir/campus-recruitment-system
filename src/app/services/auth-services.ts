/**
 * Created by assad on 1/25/17.
 */
import {Injectable, Inject} from '@angular/core';
import {FirebaseListObservable, AngularFire, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

    rootDb: any;
    users$: FirebaseListObservable<any>;
    subject = new Subject();
    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.rootDb = fb.database().ref(); // To get the root firebase ref
        this.users$ = this.af.database.list('users');
    }

    SignIn(value): Observable<any> {
        console.log(value);
        this.af.auth.login({
            email: value.email,
            password: value.password
        }).then((val) => {
            this.subject.next(val);
            this.subject.complete();
        }, (err) => {
            this.subject.error(err);
            this.subject.complete();
        });
        return this.subject.asObservable();
    }

        SignUp(value): Observable<any>  {
            console.log(value);
        this.af.auth.createUser({
            email: value.email,
            password: value.password
        }).then((val) => {
            this.subject.next(val);
            this.subject.complete();
        }, (err) => {
            this.subject.error(err);
            this.subject.complete();
        });
        return this.subject.asObservable();
}

    logout() : Observable<any> {
        this.af.auth.logout()
            .then((val) => {
                console.log('log out');
                this.subject.next('Success');
                this.subject.complete();
            }, (err) => {
                this.subject.error(err);
                this.subject.complete();
            });
        return this.subject.asObservable();
    }

    addUser(user): Observable<any> {
        this.users$.push(user)
            .then((val) => {
                this.subject.next(val);
                this.subject.complete();
            }, (err) => {
                this.subject.error(err);
                this.subject.complete();
            });
        return this.subject.asObservable();
    }
}
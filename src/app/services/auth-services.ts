/**
 * Created by assad on 1/25/17.
 */
import {Injectable, Inject} from '@angular/core';
import {FirebaseListObservable, AngularFire, FirebaseRef} from "angularfire2";
import {Observable, Subject} from "rxjs";

@Injectable()
export class AuthService {

    rootDb: any;
    subject = new Subject();
    constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
        this.rootDb = fb.database().ref(); // To get the root firebase ref
    }

    SignIn(formData): Observable<any>  {
      if(formData.valid) {
        console.log(formData.value);
        this.af.auth.login({
          email: formData.value.email,
          password: formData.value.password
        }).then((val) => {
            this.subject.next(val);
            this.subject.complete();
        }, (err) => {
            this.subject.error(err);
            this.subject.complete();
        });
          return this.subject.asObservable();
    }
}
}
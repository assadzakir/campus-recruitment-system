/**
 * Created by assad on 1/25/17.
 */
import {
        AuthProviders,
        AuthMethods

} from 'angularfire2'

    // Initialize Firebase
export  const firebaseConfig = {
        apiKey: "AIzaSyBjzT-ErfRBiz0Mr1w_2qOfAKhbO4XrdSo",
        authDomain: "campus-recruitment-syste-d3c8c.firebaseapp.com",
        databaseURL: "https://campus-recruitment-syste-d3c8c.firebaseio.com",
        storageBucket: "campus-recruitment-syste-d3c8c.appspot.com",
        messagingSenderId: "42904492866"
    };
export const firebaseAuthConfig = {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
}

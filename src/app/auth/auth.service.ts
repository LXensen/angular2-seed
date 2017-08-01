import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    private _isAuthenticated: boolean = false;
    private token: string;

    constructor() { }
    
    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        )
                    this._isAuthenticated = true;
                }
            )
            .catch(
                error => console.log(error)
                // TODO: more robust handling
            )
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                () => this._isAuthenticated = true
            )
            .catch(
                error => console.log(error)
                // TODO: more robust handling
            )
    }

    signOutUser(){
        firebase.auth().signOut()
            .then(
                () => this._isAuthenticated = false
                // TODO: redirect
            )
            .catch(
                error => console.log(error)
                // TODO: more robust handling
            )
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
            return this.token;
    }
    
    isAuthenticated() {
        return this._isAuthenticated;
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private afAuth: AngularFireAuth, private af: AngularFirestore) { }

	signup(email: string, password: string): Observable<any> {
		return from(this.afAuth.auth.createUserWithEmailAndPassword(email, password)).pipe(
			catchError(errorRes => this.handleError(errorRes))
		);
	}

	login(email: string, password: string): Observable<UserCredential> {
		return from(this.afAuth.auth.signInWithEmailAndPassword(email, password)).pipe(
			catchError(errorRes => this.handleError(errorRes))
		);

	}

	signout() {
		this.afAuth.auth.signOut();
	}

	private handleError(errorRes: HttpErrorResponse) {
		const errorMessage = 'An unknown error occured';

		if (!errorRes.message) {
			return throwError(errorMessage);
		}

		return throwError(errorRes.message);
	}

}

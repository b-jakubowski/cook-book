import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { AuthResponse } from './auth-response.interface';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	user = new BehaviorSubject<User>(null);

	constructor(private http: HttpClient) { }

	signup(email: string, password: string): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.userAPIKey,
			{
				email,
				password,
				returnSecureToken: true
			}
		).pipe(
			catchError(errorRes => this.handleError(errorRes)),
			tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn))
		);
	}

	login(email: string, password: string): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.userAPIKey,
			{
				email,
				password,
				returnSecureToken: true
			}
		).pipe(
			catchError(errorRes => this.handleError(errorRes)),
			tap(resData => this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn))
		);
	}

	private handleError(errorRes: HttpErrorResponse) {
		let errorMessage = 'An unknown error occured';

		if (!errorRes.error || !errorRes.error.error) {
			return throwError(errorMessage);
		}

		switch (errorRes.error.error.message) {
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'This email does not exist';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'Invalid password';
				break;
			case 'USER_DISABLED':
				errorMessage = 'User is disabled';
				break;
			case 'EMAIL_EXISTS':
				errorMessage = 'This email already exists';
				break;
			case 'OPERATION_NOT_ALLOWED':
				errorMessage = 'Operation was not allowed';
				break;
			case 'TOO_MANY_ATTEMPTS_TRY_LATER':
				errorMessage = 'Too many wrong attempts, please try again later';
				break;
		}

		return throwError(errorMessage);
	}


	private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
		const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
		const user = new User(
			email,
			userId,
			token,
			expirationDate
		);

		this.user.next(user);
	}
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthResponse } from './auth-response.interface';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }

	signup(email: string, password: string): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.userAPIKey,
			{
				email,
				password,
				returnSecureToken: true
			}
		).pipe(catchError(errorRes => this.handleError(errorRes)));
	}

	login(email: string, password: string): Observable<AuthResponse> {
		return this.http.post<AuthResponse>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.userAPIKey,
			{
				email,
				password,
				returnSecureToken: true
			}
		).pipe(catchError(errorRes => this.handleError(errorRes)));
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

}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import UserCredential = firebase.auth.UserCredential;

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
	isLoginMode = false;
	isLoading = false;
	error: string = null;

	constructor(private authService: AuthService, private router: Router) {}

	switchMode() {
		this.isLoginMode = !this.isLoginMode;
	}

	hideError() {
		this.error = null;
	}

	onSubmit(form: NgForm) {
		if (!form.valid) {
			return;
		}
		const email = form.value.email;
		const password = form.value.password;
		this.isLoading = true;

		let authObs: Observable<UserCredential>;

		if (this.isLoginMode) {
			authObs = this.authService.login(email, password);
		} else {
			authObs = this.authService.signup(email, password);
		}

		authObs.subscribe(
			resData => {
				this.isLoading = false;
				this.router.navigate(['/recipes']);
			},
			errorMessage => {
				this.error = errorMessage;
				this.isLoading = false;
			});
	}
}

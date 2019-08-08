import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.interface';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
	isLoginMode = false;
	isLoading = false;
	error: string = null;

	constructor(private authService: AuthService) {}

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

		let authObs: Observable<AuthResponse>;

		if (this.isLoginMode) {
			authObs = this.authService.login(email, password);
		} else {
			authObs = this.authService.signup(email, password);
		}

		authObs.subscribe(
			resData => {
				this.isLoading = false;
				form.reset();
			},
			errorMessage => {
				this.error = errorMessage;
				this.isLoading = false;
			});
	}
}

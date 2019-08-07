import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

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
		if (this.isLoginMode) {
			// ...
			this.isLoading = false;
		} else {
			this.authService.signup(email, password).subscribe(
				resData => {
					console.log(resData);
					this.isLoading = false;
				},
				error => {
					console.log(error);
					this.error = 'an error occured';
					this.isLoading = false;
				});

			form.reset();
		}

	}
}

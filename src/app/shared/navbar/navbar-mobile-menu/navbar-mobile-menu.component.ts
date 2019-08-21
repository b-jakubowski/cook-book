import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar-mobile-menu',
	templateUrl: './navbar-mobile-menu.component.html',
	styleUrls: ['./navbar-mobile-menu.component.scss']
})
export class NavbarMobileMenuComponent {
	constructor(private authService: AuthService, private router: Router) {}

	signOut() {
		this.authService.signout();
		this.router.navigate(['/auth']);
	}
}

import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar-desktop-menu',
	templateUrl: './navbar-desktop-menu.component.html',
	styleUrls: ['./navbar-desktop-menu.component.scss']
})
export class NavbarDesktopMenuComponent {
	constructor(private authService: AuthService, private router: Router) {}

	signOut() {
		this.authService.signout();
		this.router.navigate(['/auth']);
	}
}

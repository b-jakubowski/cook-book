import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { NavbarMobileMenuComponent } from './navbar/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarDesktopMenuComponent } from './navbar/navbar-desktop-menu/navbar-desktop-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ConfirmNotificationComponent } from './confirm-notification/confirm-notification.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const components = [
	NavbarComponent,
	NavbarMobileMenuComponent,
	NavbarDesktopMenuComponent,
	SidebarComponent,
	ConfirmNotificationComponent,
	LoadingSpinnerComponent
];

@NgModule({
	declarations: components,
	imports: [
		CoreModule,
		RouterModule
	],
	providers: [],
	exports: components
})

export class SharedModule { }

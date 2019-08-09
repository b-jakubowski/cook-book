import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { NavbarMobileMenuComponent } from './navbar/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarDesktopMenuComponent } from './navbar/navbar-desktop-menu/navbar-desktop-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const components = [
	NavbarComponent,
	NavbarMobileMenuComponent,
	NavbarDesktopMenuComponent,
	SidebarComponent,
	ConfirmationModalComponent,
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

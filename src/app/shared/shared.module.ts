import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { NavbarMobileMenuComponent } from './navbar/navbar-mobile-menu/navbar-mobile-menu.component';
import { NavbarDesktopMenuComponent } from './navbar/navbar-desktop-menu/navbar-desktop-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const components = [
	NavbarComponent,
	NavbarMobileMenuComponent,
	NavbarDesktopMenuComponent,
	SidebarComponent
];

@NgModule({
	declarations: components,
	imports: [
		CoreModule,
	],
	providers: [],
	exports: components
})

export class SharedModule { }

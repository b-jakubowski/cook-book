import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faHome,
	faUser,
	faSignOutAlt,
	faPlusCircle,
	faList,
	faShoppingCart,
	faPepperHot
} from '@fortawesome/free-solid-svg-icons';


const modules = [
	CommonModule,
	FontAwesomeModule,
];

@NgModule({
	declarations: [],
	imports: modules,
	exports: modules,
	providers: [],
})

export class CoreModule {
	constructor() {
		library.add(
			faHome,
			faUser,
			faSignOutAlt,
			faPlusCircle,
			faList,
			faShoppingCart,
			faPepperHot
		);
	}
}


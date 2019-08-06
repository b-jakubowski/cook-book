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
	faPepperHot,
	faClock,
	faCarrot,
	faWeightHanging,
	faEdit,
	faTrashAlt,
	faCheck,
	faTimes,
	faArrowCircleLeft,
	faEnvelope,
	faLock
} from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';


const modules = [
	CommonModule,
	FontAwesomeModule,
	HttpClientModule
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
			faPepperHot,
			faClock,
			faCarrot,
			faWeightHanging,
			faEdit,
			faTrashAlt,
			faCheck,
			faTimes,
			faArrowCircleLeft,
			faEnvelope,
			faLock
		);
	}
}


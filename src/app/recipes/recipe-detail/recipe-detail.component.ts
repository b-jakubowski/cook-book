import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
	activatedRouteId: Observable<Route> = this.activatedRoute.params;
	constructor(private activatedRoute: ActivatedRoute) {}

}

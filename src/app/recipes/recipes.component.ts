import { Component, OnInit } from '@angular/core';
import * as RecipesActions from './store/recipes.actions';
import { Store } from '@ngrx/store';
import { Recipe } from './recipe.interface';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
	
	constructor(private store: Store<{ recipes: Recipe[] }>) {}

	ngOnInit() {
		this.store.dispatch({ type: RecipesActions.FETCH_RECIPES });
	}
}

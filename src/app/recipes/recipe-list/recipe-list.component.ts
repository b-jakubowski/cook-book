import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import * as RecipesActions from '../store/recipes.actions';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
	recipes: Observable<Recipe[]> = this.store.select(state => state.recipes);

	constructor(private store: Store<{ recipes: Recipe[] }>) {}

	ngOnInit() {
		this.store.dispatch({ type: RecipesActions.FETCH_RECIPES });
	}
}

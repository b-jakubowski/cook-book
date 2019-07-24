import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRecipes from '../store/recipes.reducer';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
	recipes: Observable<Recipe[]> = this.store.select(state => fromRecipes.selectAll(state));

	constructor(private store: Store<{ recipes: { entities: Recipe[] } }>) {}
}

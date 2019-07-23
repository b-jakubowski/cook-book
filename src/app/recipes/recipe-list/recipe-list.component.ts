import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
	recipes: Observable<Recipe[]> = this.store.select(state => state.recipes);

	constructor(private store: Store<{ recipes: Recipe[] }>) {}
}

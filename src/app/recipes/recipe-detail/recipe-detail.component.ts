import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.interface';
import {filter} from 'rxjs/operators';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
	activatedRouteId: string = this.activatedRoute.snapshot.params.id;
	selectedRecipe$: Observable<Recipe> = this.store.select(state => state.recipes.entities[this.activatedRouteId]).pipe(filter(Boolean));
	isIngredientsTabSelected = true;
	isStepsTabSelected = false;
	isModalActive = false;

	constructor(
		private activatedRoute: ActivatedRoute,
		private store: Store<{ recipes: { entities: Recipe[] } }>,
		private router: Router
	) {}

	onIngredientsTabClick() {
		this.isIngredientsTabSelected = true;
		this.isStepsTabSelected = false;
	}

	onStepsTabClick() {
		this.isIngredientsTabSelected = false;
		this.isStepsTabSelected = true;
	}

	onDeleteBtnClick() {
		this.isModalActive = true;
	}

	isModalClosed(closed: boolean) {
		this.isModalActive = !closed;
	}

	backToRecipeList() {
		this.router.navigate(['/recipes']);
	}
}

import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.interface';
import {filter, catchError, take} from 'rxjs/operators';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../ingredient.interface';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
	activatedRouteId: string = this.activatedRoute.snapshot.params.id;
	selectedRecipe$: Observable<Recipe> = this.store.select(state => state.recipes.entities[this.activatedRouteId]).pipe(filter(Boolean));
	isIngredientsTabSelected = true;
	isStepsTabSelected = false;
	isModalActive = false;
	ingrAddedModalVisible = false;
	error = null;

	constructor(
		private activatedRoute: ActivatedRoute,
		private store: Store<{ recipes: { entities: Recipe[] } }>,
		private router: Router,
		private shoppingListService: ShoppingListService
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

	addIngredientsToShoppingList() {
		this.selectedRecipe$.pipe(
			take(1),
			catchError(error => this.error = error)
			).subscribe((recipe: Recipe) => {
				recipe.ingredients.forEach((ingredient: Ingredient) => {
					this.shoppingListService.addIngredient({
						name: ingredient.name,
						amount: ingredient.amount
					});
					this.toggleIngrAddedModal();
				});
			});
	}

	toggleIngrAddedModal() {
		this.ingrAddedModalVisible = true;
		setTimeout(() => this.ingrAddedModalVisible = false, 3000);
	}
}

import { Ingredient } from 'src/app/recipes/recipe-item/ingredient.interface';
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const FETCH_INGREDIENTS = '[Shopping List] Fetch Ingredients';
export const FETCH_INGREDIENTS_SUCCESS = '[Shopping List] Fetch Ingredients success';

export class AddIngredient implements Action {
	readonly type = ADD_INGREDIENT;

	constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
	readonly type = ADD_INGREDIENTS;

	constructor(public payload: Ingredient[]) {}
}

export class FetchIngredients implements Action {
	readonly type = FETCH_INGREDIENTS;
}

export class FetchIngredientsSuccess implements Action {
	readonly type = FETCH_INGREDIENTS_SUCCESS;
	constructor(public payload: Ingredient[]) {}
}

export type ShoppingListActions =
| AddIngredient
| AddIngredients
| FetchIngredients
| FetchIngredientsSuccess;

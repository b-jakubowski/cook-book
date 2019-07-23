import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.interface';

export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const FETCH_RECIPES_SUCCESS = '[Recipes] Fetch Recipes success';

export class FetchRecipes implements Action {
	readonly type = FETCH_RECIPES;
}

export class FetchRecipesSuccess implements Action {
	readonly type = FETCH_RECIPES_SUCCESS;
	constructor(public payload: Recipe[]) {}
}

export type RecipesActions =
| FetchRecipes
| FetchRecipesSuccess;

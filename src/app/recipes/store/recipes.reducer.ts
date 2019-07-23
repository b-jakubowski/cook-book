import * as RecipesActions from './recipes.actions';
import { Recipe } from '../recipe.interface';

export interface State {
	recipes: Recipe[];
}

export type Action = RecipesActions.RecipesActions;

export function recipesReducer(
	state: State,
	action: RecipesActions.RecipesActions
) {
	switch (action.type) {
		case RecipesActions.FETCH_RECIPES:
			return {
				...state
			};
		case RecipesActions.FETCH_RECIPES_SUCCESS:
			return {
				...state,
				recipes: [...action.payload]
			};
		default:
			return state;
	}
}

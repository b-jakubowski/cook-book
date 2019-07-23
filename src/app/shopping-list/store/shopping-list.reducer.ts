import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'src/app/recipes/ingredient.interface';

export interface State {
	ingredients: Ingredient[];
}

export type Action = ShoppingListActions.ShoppingListActions;

export function shoppingListReducer(
	state: State,
	action: ShoppingListActions.ShoppingListActions
) {
	switch (action.type) {
		case ShoppingListActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			};
		case ShoppingListActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case ShoppingListActions.FETCH_INGREDIENTS:
			return {
				...state
			};
		case ShoppingListActions.FETCH_INGREDIENTS_SUCCESS:
			return {
				...state,
				ingredients: [...action.payload]
			};
		default:
			return state;
	}
}

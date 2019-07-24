import * as RecipesActions from './recipes.actions';
import { Recipe } from '../recipe.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export const recipeAdapter = createEntityAdapter<Recipe>();

export interface State extends EntityState<Recipe> {}

export const initialState: State = recipeAdapter.getInitialState(null);

export function recipesReducer(
	state: State = initialState,
	action: RecipesActions.RecipesActions
) {
	switch (action.type) {
		case RecipesActions.FETCH_RECIPES:
			return initialState;
		case RecipesActions.FETCH_RECIPES_SUCCESS:
			return recipeAdapter.addAll(action.payload, state);
		default:
			return state;
	}
}


export const getRecipesState = createFeatureSelector<State>('recipes');

export const {
	selectIds,
	selectEntities,
	selectAll,
	selectTotal,
} = recipeAdapter.getSelectors(getRecipesState);

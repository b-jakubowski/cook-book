import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as RecipesActions from './recipes.actions';
import { map, mergeMap } from 'rxjs/operators';
import {Recipe} from '../recipe.interface';
import {RecipesService} from '../recipes.service';

export type Action = RecipesActions.RecipesActions;

@Injectable()
export class RecipesEffects {

	@Effect()
	getData$ = this.actions$.pipe(
		ofType(RecipesActions.FETCH_RECIPES),
		mergeMap(() => this.recipesService.getRecipes()
			.pipe(
				map((recipes: Recipe[]) => ({
					type: RecipesActions.FETCH_RECIPES_SUCCESS,
					payload: recipes
				})),
			))
	);


	constructor(
		private actions$: Actions,
		private recipesService: RecipesService
	) {}
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';

import * as ShoppingListActions from './shopping-list.actions';
import { map, mergeMap } from 'rxjs/operators';
import { Ingredient } from 'src/app/recipes/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';

export type Action = ShoppingListActions.ShoppingListActions;

@Injectable()
export class ShoppingListEffects {

	@Effect()
	getData$ = this.actions$.pipe(
		ofType(ShoppingListActions.FETCH_INGREDIENTS),
		mergeMap(() => this.shoppingListService.getShoppingList()
			.pipe(
				map((ingredients: Ingredient[]) => ({
					type: ShoppingListActions.FETCH_INGREDIENTS_SUCCESS,
					payload: ingredients
				})),
			))
	);


	constructor(
		private actions$: Actions,
		private shoppingListService: ShoppingListService
	) {}
}

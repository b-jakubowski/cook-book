import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../recipes/ingredient.interface';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})

export class ShoppingListComponent implements OnInit {
	shoppingList: Observable<Ingredient[]> = this.store.select(state => state.shoppingList);

	constructor(
		private store: Store<{ shoppingList: Ingredient[] }>) {}

	ngOnInit() {
		this.store.dispatch({ type: ShoppingListActions.FETCH_INGREDIENTS });
	}
}

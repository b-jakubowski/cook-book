import { Component } from '@angular/core';
import {ShoppingListItem} from './shopping-list-item.interface';
import {Observable} from 'rxjs';
import {ShoppingListService} from './shopping-list.service';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
	shoppingList: Observable<ShoppingListItem[]> = this.shoppingListService.fetchShoppingListFromMock();

	constructor(private shoppingListService: ShoppingListService) {}
}

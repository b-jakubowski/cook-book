import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ShoppingListItem } from './shopping-list-item.interface';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	shoppingListItemCollection: AngularFirestoreCollection<ShoppingListItem>;
	shoppingListItems: Observable<ShoppingListItem[]>;

	constructor(
		private http: HttpClient,
		public firestore: AngularFirestore
	) {
		this.shoppingListItems = this.firestore.collection<ShoppingListItem>('shopping-list').valueChanges();
	}

	fetchShoppingListFromMock(): Observable<{}> {
		return this.http.get('/assets/mocks/shopping-list-mock.json');
	}

	getShoppingList() {
		return this.shoppingListItems;
	}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ShoppingListItem } from './shopping-list-item.interface';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	shoppingListItemCollection: AngularFirestoreCollection<ShoppingListItem>;
	shoppingListItems: Observable<ShoppingListItem[]>;

	constructor(
		private http: HttpClient,
		private firestore: AngularFirestore) {
		this.shoppingListItemCollection = this.firestore.collection<ShoppingListItem>('shopping-list');
	}

	fetchShoppingListFromMock(): Observable<{}> {
		return this.http.get('/assets/mocks/shopping-list-mock.json');
	}

	getShoppingList() {
		this.shoppingListItems = this.shoppingListItemCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);

		return this.shoppingListItems;
	}
}

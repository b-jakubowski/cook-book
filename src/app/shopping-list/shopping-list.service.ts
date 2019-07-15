import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Ingredient } from '../recipes/recipe-item/ingredient.interface';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {
	shoppingListItemCollection: AngularFirestoreCollection<Ingredient>;
	shoppingListItems: Observable<Ingredient[]>;

	constructor(
		private http: HttpClient,
		private firestore: AngularFirestore) {
		this.shoppingListItemCollection = this.firestore.collection<Ingredient>('shopping-list');
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

	addIngredient(ingredient: Ingredient) {
		this.shoppingListItemCollection.add({
			name: ingredient.name,
			amount: ingredient.amount
		});
	}

	deleteIngredient(id: string) {
		this.shoppingListItemCollection.doc(id).delete()
			.then(() => {
				console.log('Document successfully deleted!');
			})
			.catch(error => {
				console.error('Error removing document: ', error);
			});
	}
}

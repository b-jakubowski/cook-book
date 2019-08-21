import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Recipe} from './recipe.interface';
import {map} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class RecipesService {
	recipes: Observable<Recipe[]>;

	constructor(
		private http: HttpClient,
		private firestore: AngularFirestore,
		private afAuth: AngularFireAuth) {}

	fetchRecipesFromMock(): Observable<any> {
		return this.http.get('/assets/mocks/recipes-mock.json');
	}

	get recipesCollection(): AngularFirestoreCollection<Recipe> {
		return this.firestore.collection<Recipe>(
			'recipes', ref => ref.where('userId', '==', this.afAuth.auth.currentUser.uid)
		);
	}

	getRecipes() {
		this.recipes = this.recipesCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);

		return this.recipes;
	}

	addRecipe(recipe: Recipe) {
		this.recipesCollection.add({
			name: recipe.name,
			category: recipe.category,
			description: recipe.description,
			ingredients: recipe.ingredients,
			time: recipe.time,
			kcal: recipe.kcal ? recipe.kcal : null,
			imagePath: recipe.imagePath ? recipe.imagePath : '',
			userId: recipe.userId
		}).catch((error) => console.log(error));
	}

	editRecipe(recipe: Recipe) {
		this.recipesCollection.doc(recipe.id).update(recipe)
			.then(() => {
				console.log('Recipe successfully updated!');
			})
			.catch(error => {
				console.error('Error removing recipe: ', error);
			});
	}

	deleteRecipe(id: string) {
		this.recipesCollection.doc(id).delete()
			.then(() => {
				console.log('Recipe successfully deleted!');
			})
			.catch(error => {
				console.error('Error removing Recipe: ', error);
			});
	}
}

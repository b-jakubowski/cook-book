import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Recipe} from './recipe.interface';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RecipesService {
	recipeCollection: AngularFirestoreCollection<Recipe>;
	recipes: Observable<Recipe[]>;

	constructor(
		private http: HttpClient,
		private firestore: AngularFirestore) {
		this.recipeCollection = this.firestore.collection<Recipe>('recipes');
	}

	fetchRecipesFromMock(): Observable<any> {
		return this.http.get('/assets/mocks/recipes-mock.json');
	}

	getRecipes() {
		this.recipes = this.recipeCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data();
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);

		return this.recipes;
	}

	addRecipe(recipe: Recipe) {
		this.recipeCollection.add({
			name: recipe.name,
			category: recipe.category,
			description: recipe.description,
			ingredients: recipe.ingredients,
			time: recipe.time,
			kcal: recipe.kcal ? recipe.kcal : null,
			imagePath: recipe.imagePath ? recipe.imagePath : '',
		});
	}

	deleteRecipe(id: string) {
		this.recipeCollection.doc(id).delete()
			.then(() => {
				console.log('Recipe successfully deleted!');
			})
			.catch(error => {
				console.error('Error removing Recipe: ', error);
			});
	}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RecipesService {

	constructor(private http: HttpClient) { }

	fetchRecipes(): Observable<any> {
		return this.http.get('');
	}

	fetchRecipesFromMock(): Observable<any> {
		return this.http.get('/assets/mocks/recipes-mock.json');
	}
}

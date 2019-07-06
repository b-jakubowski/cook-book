import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService {

	constructor(private http: HttpClient) { }

	fetchShoppingListFromMock(): Observable<any> {
		return this.http.get('/assets/mocks/shopping-list-mock.json');
	}
}

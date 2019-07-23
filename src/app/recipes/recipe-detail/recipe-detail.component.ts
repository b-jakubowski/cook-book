import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.interface';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	activatedRouteId: string = this.activatedRoute.snapshot.params.id;
	selectedRecipeImg: Observable<Recipe[]> = this.store.select(state => state.recipes.recipes);

	constructor(private activatedRoute: ActivatedRoute, private store: Store<{ recipes: {recipes: Recipe[] } }>) {}

	// getImageSource() {
		
	// }

	ngOnInit() {
		this.selectedRecipeImg.pipe(filter(Boolean)).subscribe(data => console.log(data));
		// this.activatedRouteId.subscribe(data => console.log(data));
		// console.log(this.activatedRoute.snapshot.params.id);
	}
}

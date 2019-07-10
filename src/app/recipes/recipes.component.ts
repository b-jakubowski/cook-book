import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe-item/recipe.interface';
import { RecipesService } from './recipes.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
	recipes: Observable<Recipe[]> = this.recipesService.fetchRecipesFromMock();

	constructor(private recipesService: RecipesService) {}
}

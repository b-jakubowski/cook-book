import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe-item/recipe.interface';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
	recipes: Observable<Recipe[]> = this.recipesService.fetchRecipesFromMock();

	constructor(private recipesService: RecipesService) {}
}

import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
	recipes: Observable<Recipe[]> = this.recipesService.getRecipes();

	constructor(private recipesService: RecipesService) {}
}

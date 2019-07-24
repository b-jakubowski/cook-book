import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.interface';

@Component({
	selector: 'app-recipe-detail-ingredients',
	templateUrl: './recipe-detail-ingredients.component.html',
	styleUrls: ['./recipe-detail-ingredients.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailIngredientsComponent {
	@Input() selectedRecipe$: Observable<Recipe>;
}

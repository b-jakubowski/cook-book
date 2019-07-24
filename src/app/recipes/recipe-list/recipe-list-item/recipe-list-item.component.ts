import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.interface';

@Component({
	selector: 'app-recipe-list-item',
	templateUrl: './recipe-list-item.component.html',
	styleUrls: ['./recipe-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListItemComponent {
	@Input() recipe: Recipe;
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from './recipe.interface';

@Component({
	selector: 'app-recipe-item',
	templateUrl: './recipe-item.component.html',
	styleUrls: ['./recipe-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeItemComponent {
	@Input() recipe: Recipe;
}

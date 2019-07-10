import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Recipe } from '../recipe-item/recipe.interface';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent {
	@Input() recipes: Observable<Recipe[]>;
}

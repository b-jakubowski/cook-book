import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.interface';

@Component({
	selector: 'app-recipe-detail-steps',
	templateUrl: './recipe-detail-steps.component.html',
	styleUrls: ['./recipe-detail-steps.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailStepsComponent {
	@Input() selectedRecipe$: Observable<Recipe>;
}

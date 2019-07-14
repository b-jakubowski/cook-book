import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Ingredient } from 'src/app/recipes/recipe-item/ingredient.interface';

@Component({
	selector: 'app-shopping-list-item',
	templateUrl: './shopping-list-item.component.html',
	styleUrls: ['./shopping-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListItemComponent {
	@Input() shoppingListItem: Ingredient;
}

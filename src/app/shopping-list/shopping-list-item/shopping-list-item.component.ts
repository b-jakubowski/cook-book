import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Ingredient } from 'src/app/recipes/recipe-item/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-shopping-list-item',
	templateUrl: './shopping-list-item.component.html',
	styleUrls: ['./shopping-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListItemComponent {
	@Input() shoppingListItem: Ingredient;

	constructor(private shoppingListService: ShoppingListService) {}

	deleteIngredient(id: string) {
		this.shoppingListService.deleteIngredient(id);
	}
}

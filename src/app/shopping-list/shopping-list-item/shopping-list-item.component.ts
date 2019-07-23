import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { Ingredient } from 'src/app/recipes/ingredient.interface';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-shopping-list-item',
	templateUrl: './shopping-list-item.component.html',
	styleUrls: ['./shopping-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListItemComponent {
	@Input() shoppingListItem: Ingredient;
	editedIngredient = new FormGroup({
		ingredientName: new FormControl(''),
		ingredientAmount: new FormControl('')
	});
	isEdited = false;

	constructor(private shoppingListService: ShoppingListService) {}

	deleteIngredient(id: string) {
		this.shoppingListService.deleteIngredient(id);
	}

	updateIngredient(ingredientId: string) {
		const updatedIngredient: Ingredient = {
			id: ingredientId,
			name: this.editedIngredient.value.ingredientName.length ?
				this.editedIngredient.value.ingredientName : this.shoppingListItem.name,
			amount: this.editedIngredient.value.ingredientAmount.length ?
				this.editedIngredient.value.ingredientAmount : this.shoppingListItem.amount
		};

		this.shoppingListService.updateIngredient(ingredientId, updatedIngredient);
		this.isEdited = false;
	}
}

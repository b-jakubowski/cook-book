import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
	selector: 'app-add-shopping-list-item',
	templateUrl: './add-shopping-list-item.component.html',
	styleUrls: ['./add-shopping-list-item.component.scss']
})
export class AddShoppingListItemComponent {
	ingredient = new FormGroup({
		ingredientName: new FormControl('', Validators.required),
		ingredientAmount: new FormControl('', Validators.required)
	});

	constructor(private shoppingListService: ShoppingListService) {
	}

	onSubmit() {
		if (this.ingredient.valid) {
			this.shoppingListService.addIngredient({
				name: this.ingredient.value.ingredientName,
				amount: this.ingredient.value.ingredientAmount
			});
		}
	}
}

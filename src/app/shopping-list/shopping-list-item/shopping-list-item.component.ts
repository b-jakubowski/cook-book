import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ShoppingListItem} from '../shopping-list-item.interface';

@Component({
	selector: 'app-shopping-list-item',
	templateUrl: './shopping-list-item.component.html',
	styleUrls: ['./shopping-list-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListItemComponent {
	@Input() shoppingListItem: ShoppingListItem;
}
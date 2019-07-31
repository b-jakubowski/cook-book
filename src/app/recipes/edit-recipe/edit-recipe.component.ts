import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';

@Component({
	selector: 'app-edit-recipe',
	templateUrl: './edit-recipe.component.html',
	styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {
	recipeForm = this.formBuilder.group({
		recipeName: new FormControl(''),
		time: new FormControl(''),
		kcal: new FormControl(''),
		imagePath: new FormControl(''),
		categories: this.formBuilder.array([])
	});
	categories: FormArray;
	categoryInputVal = '';

	constructor(private formBuilder: FormBuilder) {}

	onSubmit() {
		console.log(this.recipeForm.value);
	}

	addCategory(value: string): void {
		this.categories = this.recipeForm.get('categories') as FormArray;
		this.categories.push(
			this.formBuilder.group({
				name: value
			})
		);
		this.categoryInputVal = '';
	}

	deleteCategory(key: number): void {
		this.categories.removeAt(key);
	}

	onCategoryKey(event: any) {
		this.categoryInputVal = event.target.value;
	}
}

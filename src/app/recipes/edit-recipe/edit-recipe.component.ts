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
		categories: this.formBuilder.array([]),
		steps: this.formBuilder.array([]),
		ingredients: this.formBuilder.array([])
	});
	categories: FormArray;
	steps: FormArray;
	ingredients: FormArray;
	categoryInputVal = '';
	stepInputVal = '';
	ingrNameInputVal = '';
	ingrAmountInputVal = '';

	constructor(private formBuilder: FormBuilder) {}

	onSubmit() {
		console.log(this.recipeForm.value);
	}

	pushToFormArray(arr: FormArray, value: string) {
		arr.push(
			this.formBuilder.group({
				name: value
			})
		);
	}

	createIngredient(nameVal, amountVal) {
		this.ingredients.push(
			this.formBuilder.group({
				name: nameVal,
				amount: amountVal
			})
		);
	}

	addCategory(value: string): void {
		this.categories = this.recipeForm.get('categories') as FormArray;
		this.pushToFormArray(this.categories, value);
		this.categoryInputVal = '';
	}

	addStep(value: string): void {
		this.steps = this.recipeForm.get('steps') as FormArray;
		this.pushToFormArray(this.steps, value);
		this.stepInputVal = '';
	}

	addIngredient(value: string, amount: string): void {
		this.ingredients = this.recipeForm.get('ingredients') as FormArray;
		this.createIngredient(value, amount);
		this.ingrNameInputVal = '';
		this.ingrAmountInputVal = '';
	}

	deleteCategory(key: number): void {
		this.categories.removeAt(key);
	}

	deleteStep(key: number): void {
		this.steps.removeAt(key);
	}

	deleteIngredient(key: number): void {
		this.ingredients.removeAt(key);
	}

	onCategoryKey(event: any) {
		this.categoryInputVal = event.target.value;
	}

	onStepKey(event: any) {
		this.stepInputVal = event.target.value;
	}

	onIngrNameKey(event: any) {
		this.ingrNameInputVal = event.target.value;
	}

	onIngrAmountKey(event: any) {
		this.ingrAmountInputVal = event.target.value;
	}
}

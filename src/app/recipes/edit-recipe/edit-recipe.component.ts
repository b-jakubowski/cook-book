import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe.interface';
import {Router} from '@angular/router';

@Component({
	selector: 'app-edit-recipe',
	templateUrl: './edit-recipe.component.html',
	styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {
	recipeForm = this.formBuilder.group({
		name: new FormControl('', Validators.required),
		time: new FormControl('', Validators.required),
		kcal: new FormControl(''),
		imagePath: new FormControl(''),
		categories: this.formBuilder.array([], Validators.required),
		steps: this.formBuilder.array([], Validators.required),
		ingredients: this.formBuilder.array([], Validators.required)
	});
	categories: FormArray;
	steps: FormArray;
	ingredients: FormArray;
	categoryInputVal = '';
	stepInputVal = '';
	ingrNameInputVal = '';
	ingrAmountInputVal = '';

	constructor(
		private formBuilder: FormBuilder,
		private recipeService: RecipesService,
		private router: Router
	) {}

	onSubmit() {
		if (this.recipeForm.valid) {
			const recipeFormVals: Recipe = {
				name: this.recipeForm.value.name,
				category: [],
				description: [],
				ingredients: this.recipeForm.value.ingredients,
				time: this.recipeForm.value.time,
				kcal: this.recipeForm.value.kcal ? this.recipeForm.value.kcal : null,
				imagePath: this.recipeForm.value.imagePath ? this.recipeForm.value.imagePath : '',
			};

			this.recipeForm.value.categories.forEach(category => recipeFormVals.category.push(category.name));
			this.recipeForm.value.steps.forEach(step => recipeFormVals.description.push(step.name));

			this.recipeService.addRecipe(recipeFormVals);

			this.router.navigate(['/recipes']);
		}
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
		if (value.length) {
			this.pushToFormArray(this.categories, value);
			this.categoryInputVal = '';
		}
	}

	addStep(value: string): void {
		this.steps = this.recipeForm.get('steps') as FormArray;
		if (value.length) {
			this.pushToFormArray(this.steps, value);
			this.stepInputVal = '';
		}
	}

	addIngredient(value: string, amount: string): void {
		this.ingredients = this.recipeForm.get('ingredients') as FormArray;
		if (value.length && amount.length) {
			this.createIngredient(value, amount);
			this.ingrNameInputVal = '';
			this.ingrAmountInputVal = '';
		}
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

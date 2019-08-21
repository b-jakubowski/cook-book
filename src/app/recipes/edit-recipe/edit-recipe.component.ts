import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
	selector: 'app-edit-recipe',
	templateUrl: './edit-recipe.component.html',
	styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
	isEditMode = false;
	activatedRouteId: string = this.activatedRoute.snapshot.params.id;
	recipeForm = this.formBuilder.group({
		name: new FormControl('', Validators.required),
		time: new FormControl('', Validators.required),
		kcal: new FormControl(''),
		imagePath: new FormControl(''),
		categories: this.formBuilder.array([], Validators.required),
		steps: this.formBuilder.array([], Validators.required),
		ingredients: this.formBuilder.array([], Validators.required)
	});
	categoryInputVal = '';
	stepInputVal = '';
	ingrNameInputVal = '';
	ingrAmountInputVal = '';
	ingrAddedModalVisible = false;
	error = null;

	constructor(
		private formBuilder: FormBuilder,
		private recipeService: RecipesService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private afAuth: AngularFireAuth,
		private store: Store<{ recipes: { entities: Recipe[] } }>
	) {}

	ngOnInit(): void {
		this.isEditMode = this.router.url.includes('edit');
		if (this.isEditMode) {
			this.fillEditedRecipeForm();
		}
	}

	onSubmit(): void {
		if (this.recipeForm.valid) {
			const recipeFormVals: Recipe = {
				id: this.activatedRouteId,
				name: this.recipeForm.value.name,
				category: this.recipeCategories.value,
				description: this.recipeSteps.value,
				ingredients: this.recipeIngredients.value,
				time: this.recipeForm.value.time,
				kcal: this.recipeForm.value.kcal ? this.recipeForm.value.kcal : null,
				imagePath: this.recipeForm.value.imagePath ? this.recipeForm.value.imagePath : '',
				userId: this.afAuth.auth.currentUser.uid
			};

			if (!this.isEditMode) {
				this.recipeService.addRecipe(recipeFormVals);
			} else {
				this.recipeService.editRecipe(recipeFormVals);
			}

			this.openNotification();
			setTimeout(() => this.router.navigate(['/recipes']), 1000 );
		}
	}

	get recipeCategories() {
		return this.recipeForm.get('categories') as FormArray;
	}

	get recipeSteps() {
		return this.recipeForm.get('steps') as FormArray;
	}

	get recipeIngredients() {
		return this.recipeForm.get('ingredients') as FormArray;
	}

	fillEditedRecipeForm() {
		const editedRecipe$: Observable<Recipe> = this.store.select(state => state.recipes.entities[this.activatedRouteId]).pipe(filter(Boolean));
		editedRecipe$.pipe(take(1)).subscribe((recipe: Recipe) => {
			this.recipeForm.controls.name.setValue(recipe.name);
			this.recipeForm.controls.kcal.setValue(recipe.kcal);
			this.recipeForm.controls.time.setValue(recipe.time);
			this.recipeForm.controls.imagePath.setValue(recipe.imagePath);

			recipe.category.forEach(cat => this.recipeCategories.push(this.formBuilder.control(cat)));
			recipe.description.forEach(step => this.recipeSteps.push(this.formBuilder.control(step)));
			recipe.ingredients.forEach(ingr => this.recipeIngredients.push(this.formBuilder.control(ingr)));
		});
	}

	openNotification() {
		this.ingrAddedModalVisible = true;
	}

	addCategory(value: string): void {
		if (value.length) {
			this.recipeCategories.push(this.formBuilder.control(value));
			this.categoryInputVal = '';
		}
	}

	addStep(value: string): void {
		if (value.length) {
			this.recipeSteps.push(this.formBuilder.control(value));
			this.stepInputVal = '';
		}
	}

	addIngredient(value: string, amount: string): void {
		if (value.length && amount.length) {
			this.createIngredient(value, amount);
			this.ingrNameInputVal = '';
			this.ingrAmountInputVal = '';
		}
	}

	createIngredient(nameVal, amountVal) {
		this.recipeIngredients.push(this.formBuilder.control({
			name: nameVal,
			amount: amountVal
		}));
	}

	deleteCategory(key: number): void {
		this.recipeCategories.removeAt(key);
	}

	deleteStep(key: number): void {
		this.recipeSteps.removeAt(key);
	}

	deleteIngredient(key: number): void {
		this.recipeIngredients.removeAt(key);
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

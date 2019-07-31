import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import {RecipeListItemComponent} from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { AddShoppingListItemComponent } from './shopping-list/add-shopping-list-item/add-shopping-list-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListEffects } from './shopping-list/store/shopping-list.effects';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { environment } from '../environments/environment';
import { RecipeDetailIngredientsComponent } from './recipes/recipe-detail/recipe-detail-ingredients/recipe-detail-ingredients.component';
import { RecipeDetailStepsComponent } from './recipes/recipe-detail/recipe-detail-steps/recipe-detail-steps.component';
import { recipesReducer } from './recipes/store/recipes.reducer';
import { RecipesEffects } from './recipes/store/recipes.effects';

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeListItemComponent,
		EditRecipeComponent,
		ShoppingListComponent,
		ShoppingListItemComponent,
		AddShoppingListItemComponent,
		RecipeDetailComponent,
		RecipeDetailIngredientsComponent,
		RecipeDetailStepsComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase, 'cookbook'),
		AngularFirestoreModule,
		EffectsModule.forRoot([ShoppingListEffects, RecipesEffects]),
		StoreModule.forRoot({
			shoppingList: shoppingListReducer,
			recipes: recipesReducer
		}),
		StoreDevtoolsModule.instrument({logOnly: environment.production}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

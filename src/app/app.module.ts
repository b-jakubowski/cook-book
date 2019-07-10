import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { AddShoppingListItemComponent } from './shopping-list/add-shopping-list-item/add-shopping-list-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeItemComponent,
		EditRecipeComponent,
		ShoppingListComponent,
		ShoppingListItemComponent,
		AddShoppingListItemComponent,
		RecipeDetailComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase, 'cookbook'),
		AngularFirestoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

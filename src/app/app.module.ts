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

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeItemComponent,
		EditRecipeComponent,
		ShoppingListComponent,
		ShoppingListItemComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

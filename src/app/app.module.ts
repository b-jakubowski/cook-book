import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';

@NgModule({
	declarations: [
		AppComponent,
		RecipesComponent,
		RecipeListComponent,
		RecipeItemComponent,
	],
	imports: [
		BrowserModule,
		CoreModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}

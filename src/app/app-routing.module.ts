import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component: AuthComponent },
	{ path: 'recipes', component: RecipesComponent, children: [
		{
			path: '',
			redirectTo: 'list',
			pathMatch: 'full'
		},
		{
			path: 'list',
			component: RecipeListComponent,
		},
		{
			path: 'list/:id',
			component: RecipeDetailComponent,
		},
	]},
	{ path: 'edit-recipe', component: EditRecipeComponent },
	{ path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}

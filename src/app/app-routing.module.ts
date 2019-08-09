import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToRecipes = () => redirectLoggedInTo(['recipes']);

const appRoutes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{
		path: 'auth',
		component: AuthComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectLoggedInToRecipes }
	},
	{
		path: 'recipes',
		component: RecipesComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin },
		children: [
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
		]
	},
	{
		path: 'edit-recipe',
		component: EditRecipeComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin }
	},
	{
		path: 'shopping-list',
		component: ShoppingListComponent,
		canActivate: [AngularFireAuthGuard],
		data: { authGuardPipe: redirectUnauthorizedToLogin }
	},
	{
		path: '**',
		redirectTo: 'recipes'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}

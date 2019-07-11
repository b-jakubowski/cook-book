import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipeListComponent},
	{ path: 'recipes/:id', component: RecipeDetailComponent },
	{ path: 'edit-recipe', component: EditRecipeComponent },
	{ path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}

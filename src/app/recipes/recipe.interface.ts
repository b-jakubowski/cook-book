import { Ingredient } from './ingredient.interface';

export interface Recipe {
	name: string;
	category: string[];
	description: string[];
	ingredients: Ingredient[];
	time: string;
	kcal?: number;
	imagePath: string;
	userId: string;
}

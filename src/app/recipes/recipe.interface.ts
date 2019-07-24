import { Ingredient } from './ingredient.interface';

export interface Recipe {
	id: string;
	name: string;
	category: string[];
	description: string[];
	ingredients: Ingredient[];
	time: string;
	kcal?: number;
	imagePath: string;
}

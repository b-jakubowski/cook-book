import { Recipe } from 'src/app/recipes/recipe.interface';

export const recipes: Recipe[] = [
	{
		name: 'Burger wołowy',
		userId: '1',
		category: ['obiad', 'fastfood'],
		description: [
			'Wołowinę razem z łojem zmielić na grubych oczkach maszyny do mielenia mięsa.',
			'Mięso razem z Przyprawą do grilla Knorr wyrób ręką i uformuj okrągłe hamburgery o masie około 120 g. Hamburgery powinny mieć ' +
			'średnicę co najmniej 10 cm i być grube na około 2 cm.',
			'Kotlety wrzuć bezpośrednio na dobrze rozgrzany ruszt grillowy. Grilluj około 15 minut, w zależności od stopnia wysmażenia.',
			'Po 15 minutach hamburger powinien być już dobrze wysmażony. ',
			'W międzyczasie przygotuj bułki: przekrój je na pół, opiecz na grillu i posmaruj z obu stron sosem'
		],
		ingredients: [
			{
				name: 'Wołowina',
				amount: '500g'
			},
			{
				name: 'Sos ostry',
				amount: '20g'
			},
			{
				name: 'Świeże bułki',
				amount: '4szt.'
			},
			{
				name: 'ser żółty',
				amount: '4 plastry'
			},
			{
				name: 'pomidory',
				amount: '2 szt.'
			},
			{
				name: 'pikle',
				amount: '4 szt.'
			}
		],
		time: '50 min.',
		kcal: 489,
		imagePath: 'https://media1.s-nbcnews.com/j/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew' +
			'-207p_d9270c5c545b30ea094084c7f2342eb4.fit-760w.jpg'
	},
	{
		name: 'Kasza jęczmienna pęczak z ciecierzycą w sosie pomidorowym',
		userId: '1',
		category: ['obiad', 'no-meat'],
		description: [
			'Ugotuj kaszę zgodnie z przepisem na opakowaniu.',
			'Pokrojoną cebulę podsmaż na patelni na oleju, dodaj przeciśnięty przez praskę czosnek i pokrojoną w kostkę cukinię ' +
			'oraz ziarenka kolendry.',
			'Do zrumienionych warzyw dodaj passatę pomidorową i ciecierzycę. Dopraw pieprzem.',
			'Podgrzewaj całość kilka minut, dodając pod koniec jogurt naturalny i Florę ProActiv. Podawaj z kaszą.'
		],
		ingredients: [
			{
				name: 'kasza jęczmienna pęczak',
				amount: '300g'
			},
			{
				name: 'ciecierzyca gotowana lub z puszki',
				amount: '400g'
			},
			{
				name: 'passata pomidorowa',
				amount: '800g'
			},
			{
				name: 'cukinia',
				amount: '2szt'
			},
			{
				name: 'cebula',
				amount: '2 szt.'
			},
			{
				name: 'czosnek',
				amount: '1 ząbek'
			},
			{
				name: 'olej rzepakowy',
				amount: '3 łyżki'
			}
		],
		time: '10 min.',
		kcal: 267,
		imagePath: 'https://s3.przepisy.pl/przepisy3ii/img/variants/670x0/kasza-jeczmienna-peczak-z-ciecierzyca-w-sosie-pomidorowym462367.jpg'
	}
];
